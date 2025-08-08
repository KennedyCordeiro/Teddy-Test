import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: min(1.5rem, 10%);
`;

export const Header = styled.div`
  display: flex;
  justify-content: baseline;
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

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.div`
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

export const ItemInfo = styled.div`
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

export const ActionButtonItem = styled.button<{ $danger?: boolean }>`
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

export const TableCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h3`
  margin: 0 0 5px 0;
  color: #333;
  font-size: 1.2rem;
`;

export const Email = styled.p`
  margin: 0;
  color: #666;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  margin: 4px 0;
  justify-content: space-between;
  gap: 10px;
`;

export const DeleteAll = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
