import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #ff6b35;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
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
  gap: 10px;
`;

// Responsividade
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${Container} {
      padding: 15px;
    }

    ${Item} {
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }

    ${Actions} {
      justify-content: center;
    }
  }
`;
