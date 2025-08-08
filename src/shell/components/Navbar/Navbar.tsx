import { useNavigate, useLocation } from "react-router-dom";
import { eventBus } from "../../../micro-frontends/shared/utils/eventBus";
import * as S from "./Navbar.styled";
import Logo from "../../../assets/Logo - Teddy.png";
import { FaHome, FaUser, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

interface NavbarProps {
  userName: string;
}

export function Navbar({ userName }: NavbarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeSidebar();
  };

  // Fechar sidebar ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <S.NavbarContainer>
        <S.LeftSection>
          <S.HamburgerMenu onClick={toggleSidebar}>
            <S.HamburgerLine $open={sidebarOpen} />
            <S.HamburgerLine $open={sidebarOpen} />
            <S.HamburgerLine $open={sidebarOpen} />
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

      <S.Overlay $show={sidebarOpen} onClick={closeSidebar} />

      <S.Sidebar $open={sidebarOpen}>
        <S.SidebarHeader>
          <S.SidebarLogo>
            <img src={Logo} alt="logo teddy" />
          </S.SidebarLogo>
          <S.CloseButton onClick={closeSidebar} $open={sidebarOpen}>
            <FaArrowLeft size={15} />
          </S.CloseButton>
        </S.SidebarHeader>

        <S.SidebarNav>
          <S.SidebarNavItem
            $active={isActive("/")}
            onClick={() => handleNavigation("/")}>
            <FaHome size={18} />
            <span>Home</span>
          </S.SidebarNavItem>

          <S.SidebarNavItem
            $active={isActive("/clients")}
            onClick={() => handleNavigation("/clients")}>
            <FaUser size={18} />
            <span>Clientes</span>
          </S.SidebarNavItem>

          <S.SidebarNavItem
            $active={isActive("/selected")}
            onClick={() => handleNavigation("/selected")}>
            <FaUser size={18} />
            <span>Clientes selecionados</span>
          </S.SidebarNavItem>
        </S.SidebarNav>
      </S.Sidebar>
    </>
  );
}
