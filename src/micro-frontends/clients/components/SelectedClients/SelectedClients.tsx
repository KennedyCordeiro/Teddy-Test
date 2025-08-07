import { useState, useEffect } from "react";
import { Button } from "../../../shared";
import type { User } from "../../interfaces/user";
import { eventBus } from "../../../shared/utils/eventBus";
import * as S from "./SelectedClients.styled";

export function SelectedClients() {
  const [selectedClients, setSelectedClients] = useState<User[]>([]);

  useEffect(() => {
    // Escuta mudanças nos clientes selecionados
    const handleClientSelection = (data: { selectedClients: User[] }) => {
      setSelectedClients(data.selectedClients);
    };

    eventBus.on("clients-selected", handleClientSelection);

    return () => {
      eventBus.off("clients-selected", handleClientSelection);
    };
  }, []);

  const removeFromSelection = (clientId: string) => {
    const updatedSelection = selectedClients.filter(
      (client) => client.id !== clientId
    );
    setSelectedClients(updatedSelection);

    // Emite evento para atualizar outros componentes
    eventBus.emit("client-deselected", { clientId });
  };

  return (
    <S.Container>
      <S.Title>Clientes Selecionados ({selectedClients.length})</S.Title>

      {selectedClients.length === 0 ? (
        <S.EmptyMessage>
          Nenhum cliente selecionado. Vá para a página de Clientes para
          selecionar alguns.
        </S.EmptyMessage>
      ) : (
        <S.List>
          {selectedClients.map((client) => (
            <S.Item key={client.id}>
              <S.Info>
                <S.Name>{client.name}</S.Name>
                <S.Email>{client.email}</S.Email>
              </S.Info>
              <S.Actions>
                <Button
                  variant="danger"
                  size="small"
                  onClick={() => client.id && removeFromSelection(client.id)}>
                  Remover
                </Button>
              </S.Actions>
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Container>
  );
}
