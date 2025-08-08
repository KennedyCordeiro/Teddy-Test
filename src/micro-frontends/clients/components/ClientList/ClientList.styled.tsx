import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: min(1rem, 10%);
  min-height: 100dvh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  color: #495057;
  font-size: 1.25rem;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
  span {
    font-weight: 600;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FilterLabel = styled.span`
  color: #6c757d;
  font-size: 0.9rem;
`;

export const FilterSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background: white;
  color: #495057;
  font-size: 0.9rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff6b35;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  background: #fafafa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 160px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardContent = styled.div`
  flex: 1;
  text-align: center;
`;

export const ClientName = styled.h3`
  margin: 0 0 15px 0;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ClientInfo = styled.p`
  margin: 0 0 8px 0;
  color: #6c757d;
  font-size: 0.9rem;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  width: 100%;
`;

export const ActionButton = styled.button<{ $danger?: boolean }>`
  background: none;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => (props.$danger ? "#dc3545" : "#6c757d")};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$danger ? "#f8d7da" : "#f8f9fa")};
    color: ${(props) => (props.$danger ? "#c82333" : "#495057")};
  }
`;

export const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.$active ? "#ff6b35" : "#dee2e6")};
  background: ${(props) => (props.$active ? "#ff6b35" : "white")};
  color: ${(props) => (props.$active ? "white" : "#495057")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.$active ? "#e55a2b" : "#f8f9fa")};
    border-color: ${(props) => (props.$active ? "#e55a2b" : "#adb5bd")};
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #667eea;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #dc3545;
  background: #f8d7da;
  border-radius: 8px;
  padding: 20px;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: #6c757d;
  font-style: italic;
`;

// Responsividade
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${Container} {
      padding: 15px;
    }

    ${Header} {
      flex-direction: column;
      gap: 15px;
      align-items: flex-start;
    }

    ${Grid} {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 15px;
    }

    ${Card} {
      min-height: 140px;
    }
  }

  @media (max-width: 480px) {
    ${Grid} {
      grid-template-columns: 1fr;
    }

    ${Pagination} {
      flex-wrap: wrap;
    }
  }
`;

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
