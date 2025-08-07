import { useState, useEffect } from "react";
import { Button } from "../../../shared";
import type { User } from "../../interfaces/user";
import { eventBus } from "../../../shared/utils/eventBus";
import * as S from "./ClientList.styled";
import { UserService } from "../../services/userService";

export function ClientList() {
  const [clients, setClients] = useState<User[]>([]);
  const [selectedClients, setSelectedClients] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const data = await UserService.getAll();
      setClients(data.clients || []);
      setError(null);
    } catch (err) {
      setError("Falha ao carregar clientes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteClient = async (id: string) => {
    try {
      setLoading(true);
      await UserService.delete(id);
      setClients((prev) => prev.filter((c) => c.id !== id));
      setSelectedClients((prev) => prev.filter((c) => c.id !== id));
      setError(null);

      eventBus.emit("client-deleted", { id });
    } catch (err) {
      setError("Falha ao deletar cliente");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleClientSelection = (client: User) => {
    const newSelectedClients = selectedClients.some((c) => c.id === client.id)
      ? selectedClients.filter((c) => c.id !== client.id)
      : [...selectedClients, client];

    setSelectedClients(newSelectedClients);

    // Emite evento para outros componentes saberem sobre a seleção
    eventBus.emit("clients-selected", { selectedClients: newSelectedClients });
  };

  useEffect(() => {
    fetchClients();
  }, []);

  if (loading) {
    return <S.Loading>Carregando...</S.Loading>;
  }

  if (error) {
    return <S.Error>Erro: {error}</S.Error>;
  }

  return (
    <S.Container>
      <S.InfoFilters>
        <S.Title> {clients.length} Clientes encontrados:</S.Title>
        <div className="filter">Clientes por página:</div>
      </S.InfoFilters>
      {clients.length === 0 ? (
        <S.EmptyMessage>Nenhum cliente cadastrado.</S.EmptyMessage>
      ) : (
        <S.List>
          {clients.map((client) => (
            <S.Item key={client.id}>
              <S.Info>
                <S.Name>{client.name}</S.Name>
                <S.Email>{client.email}</S.Email>
              </S.Info>
              <S.Actions>
                <Button
                  variant={
                    selectedClients.some((c) => c.id === client.id)
                      ? "primary"
                      : "secondary"
                  }
                  size="small"
                  onClick={() => toggleClientSelection(client)}>
                  {selectedClients.some((c) => c.id === client.id)
                    ? "Selecionado"
                    : "Selecionar"}
                </Button>
                <Button
                  variant="danger"
                  size="small"
                  onClick={() => client.id && deleteClient(client.id)}>
                  Deletar
                </Button>
              </S.Actions>
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Container>
  );
}
