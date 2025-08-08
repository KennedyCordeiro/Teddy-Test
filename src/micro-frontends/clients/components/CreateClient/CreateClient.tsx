import { useState } from "react";
import { Button, Input } from "../../../shared";
import { UserService } from "../../services/userService";
import { eventBus } from "../../../shared/utils/eventBus";
import * as S from "./CreateClient.styled";
import { FiX } from "react-icons/fi";

interface CreateClientProps {
  isOpen: boolean;
  onClose: () => void;
  onClientCreated: () => void;
}

export function CreateClient({
  isOpen,
  onClose,
  onClientCreated,
}: CreateClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    salary: "",
    companyValuation: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newClient = {
        name: formData.name,
        salary: parseFloat(formData.salary) || 0,
        companyValuation: parseFloat(formData.companyValuation) || 0,
      };

      const clientCreated = await UserService.create(newClient);

      eventBus.emit("client-created", { id: clientCreated.id! });

      setFormData({
        name: "",
        salary: "",
        companyValuation: "",
      });

      onClientCreated();
      onClose();
    } catch (err) {
      setError("Falha ao criar cliente");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <S.Header>
          <S.Title>Criar Cliente:</S.Title>
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
              {loading ? "Criando..." : "Criar Cliente"}
            </Button>
          </S.ButtonGroup>
        </S.Form>
      </S.Modal>
    </S.Overlay>
  );
}
