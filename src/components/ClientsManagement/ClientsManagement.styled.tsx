import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin: 0;
`;

export const UserInfo = styled.p`
  color: #666;
  font-size: 1rem;
  margin: 5px 0 0 0;
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #c82333;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 40px;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 8px;
`;

export const FormTitle = styled.h2`
  color: #495057;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #5a6fd8;
  }
`;

export const ClientsSection = styled.div`
  margin-bottom: 30px;
`;

export const ClientsTitle = styled.h2`
  color: #495057;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const ClientsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ClientItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ClientInfo = styled.div`
  flex: 1;
`;

export const ClientName = styled.h3`
  margin: 0 0 5px 0;
  color: #333;
  font-size: 1.2rem;
`;

export const ClientEmail = styled.p`
  margin: 0;
  color: #6c757d;
`;

export const ClientActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button<{ $isSelected?: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background: ${(props) => (props.$isSelected ? "#28a745" : "#28a745")};
  color: white;

  &:hover {
    background: ${(props) => (props.$isSelected ? "#218838" : "#218838")};
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background: #dc3545;
  color: white;

  &:hover {
    background: #c82333;
  }
`;

export const SelectedSection = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`;

export const SelectedTitle = styled.h3`
  color: #1976d2;
  margin-bottom: 15px;
  font-size: 1.3rem;
`;

export const SelectedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SelectedItem = styled.li`
  padding: 8px 0;
  color: #333;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
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

// Responsividade
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${Container} {
      padding: 10px;
    }

    ${Content} {
      padding: 20px;
      margin: 10px;
    }

    ${ClientItem} {
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }

    ${ClientActions} {
      justify-content: center;
    }
  }
`;
