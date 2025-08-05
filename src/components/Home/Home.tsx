import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./Home.styled";

export function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem("userName", name.trim());
      navigate("/clients");
    }
  };

  return (
    <C.HomeContainer>
      <C.HomeCard>
        <C.HomeTitle>Bem-vindo ao Sistema de Clientes</C.HomeTitle>
        <C.HomeForm onSubmit={handleSubmit}>
          <C.HomeInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
          <C.HomeButton type="submit">Entrar</C.HomeButton>
        </C.HomeForm>
      </C.HomeCard>
    </C.HomeContainer>
  );
}
