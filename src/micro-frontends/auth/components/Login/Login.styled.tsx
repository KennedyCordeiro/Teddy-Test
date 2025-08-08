import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const LoginCard = styled.div`
  background: var(--primary-color);
  border-radius: 12px;
  max-width: 500px;
  padding: min(1rem, 10%);
  width: 100%;
  height: fit-content;
`;

export const LoginTitle = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.55rem;
  text-align: center;
  font-weight: 400;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginInput = styled.input`
  padding: 15px;
  border: 2px solid #979797;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background-color: var(--primary-color);
  color: var(--secondary-color);

  &:focus {
    outline: none;
    border-color: #424242;
  }
`;

export const HomeTitle = styled.h1`
  color: #333;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
`;

export const HomeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
