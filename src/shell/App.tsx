import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { eventBus } from "../micro-frontends/shared/utils/eventBus";
import { Login } from "../micro-frontends/auth";
import { ClientList, SelectedClients } from "../micro-frontends/clients";
import { Navbar } from "./components/Navbar";
import * as S from "./App.styled";

export function App() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) setUserName(storedUser);

    const handleLogin = (data: { name: string }) => {
      setUserName(data.name);
    };

    const handleLogout = () => {
      setUserName(null);
    };

    eventBus.on("user-login", handleLogin);
    eventBus.on("user-logout", handleLogout);

    return () => {
      eventBus.off("user-login", handleLogin);
      eventBus.off("user-logout", handleLogout);
    };
  }, []);

  return (
    <BrowserRouter>
      <S.AppContainer>
        {/* Navbar aparece apenas quando o usuário está logado */}
        {userName && <Navbar userName={userName} />}

        <S.Content>
          <Routes>
            <Route
              path="/"
              element={
                userName ? <Navigate to="/clients" replace /> : <Login />
              }
            />
            <Route
              path="/clients"
              element={userName ? <ClientList /> : <Navigate to="/" replace />}
            />
            <Route
              path="/selected"
              element={
                userName ? <SelectedClients /> : <Navigate to="/" replace />
              }
            />
          </Routes>
        </S.Content>
      </S.AppContainer>
    </BrowserRouter>
  );
}
