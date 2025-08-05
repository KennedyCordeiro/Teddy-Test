import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../services/userService";
import type { User } from "../../interfaces/user";
import * as C from "./ClientsManagement.styled";

export function ClientsManagement() {
  const [clients, setClients] = useState<User[]>([]);
  const [selectedClients, setSelectedClients] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");

  const fetchClients = async () => {
    try {
      setLoading(true);
      const data = await UserService.getAll();
      setClients(data);
      setError(null);
    } catch (err) {
      setError("Falha ao carregar clientes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      try {
        setLoading(true);
        const newClient = await UserService.create({
          name: name.trim(),
          email: email.trim(),
        });
        setClients((prev) => [...prev, newClient]);
        setName("");
        setEmail("");
        setError(null);
      } catch (err) {
        setError("Falha ao adicionar cliente");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteClient = async (id: string) => {
    try {
      setLoading(true);
      await UserService.delete(id);
      setClients((prev) => prev.filter((c) => c.id !== id));
      setSelectedClients((prev) => prev.filter((c) => c.id !== id));
      setError(null);
    } catch (err) {
      setError("Falha ao deletar cliente");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleClientSelection = (client: User) => {
    setSelectedClients((prev) =>
      prev.some((c) => c.id === client.id)
        ? prev.filter((c) => c.id !== client.id)
        : [...prev, client]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  useEffect(() => {
    fetchClients();
  }, []);

  if (loading) {
    return (
      <C.Container>
        <C.Content>
          <C.Loading>Carregando...</C.Loading>
        </C.Content>
      </C.Container>
    );
  }

  if (error) {
    return (
      <C.Container>
        <C.Content>
          <C.Error>Erro: {error}</C.Error>
        </C.Content>
      </C.Container>
    );
  }

  return (
    <C.Container>
      <C.Content>
        <C.Header>
          <div>
            <C.Title>Sistema de Gerenciamento de Clientes</C.Title>
            <C.UserInfo>Usuário: {userName}</C.UserInfo>
          </div>
          <C.LogoutButton onClick={handleLogout}>Sair</C.LogoutButton>
        </C.Header>

        <C.FormSection>
          <C.FormTitle>Adicionar Novo Cliente</C.FormTitle>
          <C.Form onSubmit={addClient}>
            <C.Input
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              placeholder="Nome do cliente"
              required
            />
            <C.Input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="Email do cliente"
              required
            />
            <C.Button type="submit">Adicionar Cliente</C.Button>
          </C.Form>
        </C.FormSection>

        <C.ClientsSection>
          <C.ClientsTitle>Lista de Clientes ({clients.length})</C.ClientsTitle>
          {clients.length === 0 ? (
            <p>Nenhum cliente cadastrado.</p>
          ) : (
            <C.ClientsList>
              {clients.map((client) => (
                <C.ClientItem key={client.id}>
                  <C.ClientInfo>
                    <C.ClientName>{client.name}</C.ClientName>
                    <C.ClientEmail>{client.email}</C.ClientEmail>
                  </C.ClientInfo>
                  <C.ClientActions>
                    <C.ActionButton
                      onClick={() => toggleClientSelection(client)}
                      $isSelected={selectedClients.some(
                        (c) => c.id === client.id
                      )}>
                      {selectedClients.some((c) => c.id === client.id)
                        ? "Selecionado"
                        : "Selecionar"}
                    </C.ActionButton>
                    <C.DeleteButton
                      onClick={() => client.id && deleteClient(client.id)}>
                      Deletar
                    </C.DeleteButton>
                  </C.ClientActions>
                </C.ClientItem>
              ))}
            </C.ClientsList>
          )}
        </C.ClientsSection>

        {selectedClients.length > 0 && (
          <C.SelectedSection>
            <C.SelectedTitle>
              Clientes Selecionados ({selectedClients.length})
            </C.SelectedTitle>
            <C.SelectedList>
              {selectedClients.map((client) => (
                <C.SelectedItem key={client.id}>
                  {client.name} - {client.email}
                </C.SelectedItem>
              ))}
            </C.SelectedList>
          </C.SelectedSection>
        )}
      </C.Content>
    </C.Container>
  );
}
