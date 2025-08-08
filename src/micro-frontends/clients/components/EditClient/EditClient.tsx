import { useState, useEffect } from "react";
import { Button, Input } from "../../../shared";
import { UserService } from "../../services/userService";
import * as S from "./EditClient.styled";
import { FiX } from "react-icons/fi";
import type { User } from "../../interfaces/user";

interface EditClientProps {
  isOpen: boolean;
  client: User | null;
  onClose: () => void;
  onClientUpdated: () => void;
}

export function EditClient({
  isOpen,
  client,
  onClose,
  onClientUpdated,
}: EditClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    salary: "",
    companyValuation: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (client) {
      setFormData({
        name: client.name || "",
        salary: client.salary?.toString() || "",
        companyValuation: client.companyValuation?.toString() || "",
      });
    }
  }, [client]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!client) return;
    setLoading(true);
    setError(null);
    try {
      await UserService.update(client.id!, {
        name: formData.name,
        salary: parseFloat(formData.salary) || 0,
        companyValuation: parseFloat(formData.companyValuation) || 0,
      });
      onClientUpdated();
      onClose();
    } catch (err) {
      setError("Falha ao atualizar cliente");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !client) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Title>Editar Cliente</S.Title>
          <S.CloseButton onClick={onClose}>
            <FiX size={20} />
          </S.CloseButton>
        </S.Header>
        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <Input
              type="text"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("name", e.target.value)
              }
              placeholder="Digite o nome do cliente"
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <Input
              type="number"
              value={formData.salary}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("salary", e.target.value)
              }
              placeholder="Digite o salário"
            />
          </S.FormGroup>
          <S.FormGroup>
            <Input
              type="number"
              value={formData.companyValuation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("companyValuation", e.target.value)
              }
              placeholder="Digite o valor da empresa"
            />
          </S.FormGroup>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.ButtonGroup>
            <Button
              type="submit"
              variant="secondary"
              disabled={loading}
              style={{ width: "100%" }}>
              {loading ? "Salvando..." : "Salvar alterações"}
            </Button>
          </S.ButtonGroup>
        </S.Form>
      </S.Modal>
    </S.Overlay>
  );
}
