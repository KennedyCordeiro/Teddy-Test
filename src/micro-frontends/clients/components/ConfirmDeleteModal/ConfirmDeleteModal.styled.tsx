import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--secondary-color);
`;

export const ModalClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 1.2rem;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover {
    background: #f5f5f5;
  }
`;

export const ModalBody = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 24px;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
