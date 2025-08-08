import { useNavigate, useLocation } from "react-router-dom";
import { eventBus } from "../../../micro-frontends/shared/utils/eventBus";
import * as S from "./Navbar.styled";
import Logo from "../../../assets/Logo - Teddy.png";
interface NavbarProps {
  userName: string;
}

export function Navbar({ userName }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("selectedClients");
    eventBus.emit("user-logout", {});
    navigate("/");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <S.NavbarContainer>
      <S.LeftSection>
        <S.HamburgerMenu>
          <S.HamburgerLine />
          <S.HamburgerLine />
          <S.HamburgerLine />
        </S.HamburgerMenu>
        <S.Logo>
          <img src={Logo} alt="logo teddy" />
        </S.Logo>
      </S.LeftSection>

      <S.CenterSection>
        <S.NavLink
          $isActive={isActive("/clients")}
          onClick={() => navigate("/clients")}>
          Clientes
        </S.NavLink>
        <S.NavLink
          $isActive={isActive("/selected")}
          onClick={() => navigate("/selected")}>
          Clientes selecionados
        </S.NavLink>
        <S.NavLink $isActive={false} onClick={handleLogout}>
          Sair
        </S.NavLink>
      </S.CenterSection>

      <S.RightSection>
        <S.Greeting>
          Olá, <span style={{ fontWeight: "700" }}>{userName}!</span>
        </S.Greeting>
      </S.RightSection>
    </S.NavbarContainer>
  );
}
