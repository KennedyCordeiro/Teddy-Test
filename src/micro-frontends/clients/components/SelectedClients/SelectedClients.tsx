import { useState, useEffect } from "react";
import type { User } from "../../interfaces/user";
import { eventBus } from "../../../shared/utils/eventBus";
import * as S from "./SelectedClients.styled";
import * as ClientListS from "../ClientList/ClientList.styled";
import { UserService } from "../../services/userService";
import { FiUserMinus, FiEdit, FiTrash2 } from "react-icons/fi";
import { EditClient } from "../EditClient/EditClient";
import { ConfirmDeleteModal } from "../ConfirmDeleteModal";
import { Button } from "../../../shared";

export function SelectedClients() {
  const [selectedClients, setSelectedClients] = useState<User[]>([]);
  const [editModal, setEditModal] = useState<{
    open: boolean;
    client: User | null;
  }>({ open: false, client: null });
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    client: User | null;
  }>({ open: false, client: null });

  const fetchSelectedClients = async () => {
    const ids: string[] = JSON.parse(
      localStorage.getItem("selectedClients") || "[]"
    );
    const clients: User[] = [];
    for (const id of ids) {
      try {
        const client = await UserService.getById(id);
        if (client) clients.push(client);
      } catch {
        console.log("Cliente deletado");
      }
    }
    setSelectedClients(clients);
  };

  useEffect(() => {
    fetchSelectedClients();
    const update = () => {
      fetchSelectedClients();
    };
    eventBus.on("clients-selected", update);
    eventBus.on("client-deleted", update);
    eventBus.on("client-updated", update);
    return () => {
      eventBus.off("clients-selected", update);
      eventBus.off("client-deleted", update);
      eventBus.off("client-updated", update);
    };
  }, []);

  const removeFromSelection = (clientId: string) => {
    const ids = JSON.parse(localStorage.getItem("selectedClients") || "[]");
    const updatedIds = ids.filter((id: string) => id !== clientId);
    localStorage.setItem("selectedClients", JSON.stringify(updatedIds));
    setSelectedClients((prev) => {
      const filtered = prev.filter((client) => client.id !== clientId);
      return filtered;
    });
    eventBus.emit("clients-selected", { selectedClients: updatedIds });
  };

  const handleEditClick = (client: User) => {
    setEditModal({ open: true, client });
  };

  const removeAllSelected = () => {
    localStorage.removeItem("selectedClients");
    setSelectedClients([]);
  };

  const handleConfirmEdit = () => {
    setEditModal({ open: false, client: null });
    fetchSelectedClients();
  };

  const handleDeleteClick = (client: User) => {
    setDeleteModal({ open: true, client });
  };

  const handleConfirmDelete = async () => {
    if (!deleteModal.client || !deleteModal.client.id) return;
    try {
      await UserService.delete(deleteModal.client.id);
      removeFromSelection(deleteModal.client.id);
      eventBus.emit("client-deleted", { id: deleteModal.client.id });
    } catch (err) {
      console.log("Error ", err);
    } finally {
      setDeleteModal({ open: false, client: null });
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Clientes Selecionados ({selectedClients.length})</S.Title>
      </S.Header>

      {selectedClients.length === 0 ? (
        <S.EmptyMessage>
          Nenhum cliente selecionado. Vá para a página de Clientes para
          selecionar alguns.
        </S.EmptyMessage>
      ) : (
        <S.TableCards>
          {selectedClients.map((client) => (
            <S.Item key={client.id}>
              <S.ClientName>{client.name}</S.ClientName>
              <S.ClientInfo>
                Salário: {formatCurrency(client.salary || 0)}
              </S.ClientInfo>
              <S.ClientInfo>
                Empresa: {formatCurrency(client.companyValuation || 0)}
              </S.ClientInfo>
              <S.Actions>
                <ClientListS.ActionButton
                  title="Remover da lista de selecionados"
                  onClick={() => {
                    if (client.id) {
                      removeFromSelection(client.id);
                    }
                  }}>
                  <FiUserMinus size={16} />
                </ClientListS.ActionButton>
                <ClientListS.ActionButton
                  title="Editar cliente"
                  onClick={() =>
                    handleEditClick({ ...client, id: String(client.id) })
                  }>
                  <FiEdit size={16} />
                </ClientListS.ActionButton>
                <ClientListS.ActionButton
                  title="Excluir cliente"
                  onClick={() => handleDeleteClick(client)}
                  $danger>
                  <FiTrash2 size={16} />
                </ClientListS.ActionButton>
              </S.Actions>
            </S.Item>
          ))}
        </S.TableCards>
      )}

      {selectedClients.length > 0 && (
        <S.DeleteAll>
          <Button
            variant="primary"
            size="medium"
            style={{
              width: "100%",
              background: "transparent",
              border: "2px solid var(--details-color)",
              color: "var(--details-color)",
            }}
            onClick={() => removeAllSelected()}>
            Limpar clientes selecionados
          </Button>
        </S.DeleteAll>
      )}
      {/* Modais */}
      <EditClient
        isOpen={editModal.open}
        client={editModal.client}
        onClose={() => setEditModal({ open: false, client: null })}
        onClientUpdated={handleConfirmEdit}
      />
      <ConfirmDeleteModal
        isOpen={deleteModal.open}
        clientName={deleteModal.client?.name || ""}
        onConfirm={handleConfirmDelete}
        onClose={() => setDeleteModal({ open: false, client: null })}
      />
    </S.Container>
  );
}
