import { useState } from "react";
import { Button } from "../../../shared";
import { eventBus } from "../../../shared/utils/eventBus";
import * as S from "./Login.styled";

export function Login() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      eventBus.emit("user-login", { name: name.trim() });

      // Armazenar no localStorage
      localStorage.setItem("userName", name.trim());
    }
  };

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.LoginTitle>Bem-vindo ao Sistema de Clientes</S.LoginTitle>
        <S.LoginForm onSubmit={handleSubmit}>
          <S.LoginInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
          <Button type="submit" size="large" variant="secondary">
            Entrar
          </Button>
        </S.LoginForm>
      </S.LoginCard>
    </S.LoginContainer>
  );
}
