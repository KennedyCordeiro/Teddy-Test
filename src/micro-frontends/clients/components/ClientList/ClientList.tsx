import { useState, useEffect } from "react";
import { Button } from "../../../shared";
import type { User } from "../../interfaces/user";
import { eventBus } from "../../../shared/utils/eventBus";
import * as S from "./ClientList.styled";
import { UserService } from "../../services/userService";
import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";
import { CreateClient } from "../CreateClient";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import { EditClient } from "../EditClient";

const PAGE_SIZE_OPTIONS = [4, 8, 16, 32, 64];

export function ClientList() {
  const [clients, setClients] = useState<User[]>([]);
  const [selectedClients, setSelectedClients] = useState<string[]>([]); // agora só ids
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage, setClientsPerPage] = useState(PAGE_SIZE_OPTIONS[2]);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    client: User | null;
  }>({ open: false, client: null });
  const [editModal, setEditModal] = useState<{
    open: boolean;
    client: User | null;
  }>({ open: false, client: null });

  const fetchClients = async (page = 1, limit = clientsPerPage) => {
    try {
      setLoading(true);
      const data = await UserService.getAll(page, limit);
      setClients(data.clients || []);
      setTotalPages(data.totalPages || 1);
      setError(null);
    } catch (err) {
      setError("Falha ao carregar clientes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (client: User) => {
    setDeleteModal({ open: true, client });
  };

  const handleEditClick = (client: User) => {
    setEditModal({ open: true, client });
  };

  const handleConfirmDelete = async () => {
    if (!deleteModal.client) return;
    try {
      setLoading(true);
      await UserService.delete(deleteModal.client.id!);
      fetchClients(currentPage, clientsPerPage);
      setSelectedClients((prev) =>
        prev.filter((id) => id !== deleteModal.client!.id)
      );
      setError(null);
      eventBus.emit("client-deleted", { id: deleteModal.client.id! });
    } catch (err) {
      setError("Falha ao deletar cliente");
      console.error(err);
    } finally {
      setLoading(false);
      setDeleteModal({ open: false, client: null });
    }
  };

  const handleConfirmEdit = () => {
    fetchClients(currentPage, clientsPerPage);
    setEditModal({ open: false, client: null });
  };

  const toggleClientSelection = (client: User) => {
    setSelectedClients((prev) => {
      let updated;
      if (prev.includes(client.id!)) {
        updated = prev.filter((id) => id !== client.id);
      } else {
        updated = [...prev, client.id!];
      }
      localStorage.setItem("selectedClients", JSON.stringify(updated));

      eventBus.emit("clients-selected", { selectedClients: updated });
      return updated;
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handleClientCreated = () => {
    fetchClients(currentPage, clientsPerPage);
  };

  useEffect(() => {
    fetchClients(currentPage, clientsPerPage);
    const handleClientCreated = () => {
      fetchClients(currentPage, clientsPerPage);
    };
    eventBus.on("client-created", handleClientCreated);
    return () => {
      eventBus.off("client-created", handleClientCreated);
    };
  }, [currentPage, clientsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [clientsPerPage]);

  function getPageButtons() {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  }

  if (loading) {
    return <S.Loading>Carregando...</S.Loading>;
  }

  if (error) {
    return <S.Error>Erro: {error}</S.Error>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>{clients.length} clientes encontrados:</S.Title>
        <S.FilterContainer>
          <S.FilterLabel>Clientes por página:</S.FilterLabel>
          <S.FilterSelect
            value={clientsPerPage}
            onChange={(e) => setClientsPerPage(Number(e.target.value))}>
            {PAGE_SIZE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </S.FilterSelect>
        </S.FilterContainer>
      </S.Header>

      {clients.length === 0 ? (
        <S.EmptyMessage>Nenhum cliente cadastrado.</S.EmptyMessage>
      ) : (
        <>
          <S.Grid>
            {clients.map((client) => (
              <S.Card key={client.id}>
                <S.CardContent>
                  <S.ClientName>{client.name}</S.ClientName>
                  <S.ClientInfo>
                    Salário: {formatCurrency(client.salary || 0)}
                  </S.ClientInfo>
                  <S.ClientInfo>
                    Empresa: {formatCurrency(client.companyValuation || 0)}
                  </S.ClientInfo>
                </S.CardContent>
                <S.CardActions>
                  {!selectedClients.includes(client.id!) && (
                    <S.ActionButton
                      onClick={() => toggleClientSelection(client)}>
                      <FiPlus size={16} />
                    </S.ActionButton>
                  )}
                  <S.ActionButton onClick={() => handleEditClick(client)}>
                    <FiEdit size={16} />
                  </S.ActionButton>
                  <S.ActionButton
                    onClick={() => handleDeleteClick(client)}
                    $danger>
                    <FiTrash2 size={16} />
                  </S.ActionButton>
                </S.CardActions>
              </S.Card>
            ))}
          </S.Grid>

          <S.CreateButton>
            <Button
              variant="primary"
              size="large"
              style={{
                width: "100%",
                background: "transparent",
                border: "2px solid var(--details-color)",
                color: "var(--details-color)",
              }}
              onClick={() => setIsCreateModalOpen(true)}>
              Criar cliente
            </Button>
          </S.CreateButton>

          <S.Pagination>
            {getPageButtons().map((page, idx) =>
              typeof page === "number" ? (
                <S.PageButton
                  key={page}
                  $active={page === currentPage}
                  onClick={() => setCurrentPage(page)}>
                  {page}
                </S.PageButton>
              ) : (
                <S.PageButton key={"ellipsis-" + idx} disabled>
                  {page}
                </S.PageButton>
              )
            )}
          </S.Pagination>
        </>
      )}

      <CreateClient
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onClientCreated={handleClientCreated}
      />

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
