import { FiX } from "react-icons/fi";
import { Button } from "../../../shared";
import * as S from "./ConfirmDeleteModal.styled";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  clientName: string;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmDeleteModal({
  isOpen,
  clientName,
  onConfirm,
  onClose,
}: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>Excluir cliente:</S.ModalTitle>
          <S.ModalClose onClick={onClose}>
            <FiX size={20} />
          </S.ModalClose>
        </S.ModalHeader>
        <S.ModalBody>
          Você está prestes a excluir o cliente: <b>{clientName}</b>
        </S.ModalBody>
        <S.ModalFooter>
          <Button
            variant="danger"
            size="large"
            style={{ width: "100%", background: "var(--details-color)" }}
            onClick={onConfirm}>
            Excluir cliente
          </Button>
        </S.ModalFooter>
      </S.Modal>
    </S.Overlay>
  );
}
