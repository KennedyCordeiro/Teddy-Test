import styled from "styled-components";

export const Overlay = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 998;
`;

export const Sidebar = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: var(--primary-color);
  transform: translateX(${({ $open }) => ($open ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 999;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 20px;
  min-height: 20dvh;
  background: #fff;
  border-bottom: 1px solid var(--secondary-color);
`;

export const SidebarLogo = styled.div`
  img {
    height: 50px;
    width: auto;
  }
`;

export const CloseButton = styled.button<{ $open: boolean }>`
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border-radius: 45% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: ${({ $open }) => ($open ? "-8%" : "0%")};
  bottom: 10%;
  padding: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #404040;
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  flex: 1;
  background-color: var(--primary-color);
`;

export const SidebarNavItem = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  margin: 0 16px 8px 16px;
  background: ${({ $active }) => ($active ? "#ff6b35" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "var(--secondary-color)")};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $active }) =>
      $active ? "#ff6b35" : "var(--secondary-color)"};
    color: #fff;
  }

  span {
    flex: 1;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3dvw;
  height: 64px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  padding: 12px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  margin-right: 12px;

  &:hover {
    background-color: #f5f5f5;
  }

  /* @media (width > 768px) {
    display: none;
  } */
`;

export const HamburgerLine = styled.div<{ $open?: boolean }>`
  width: 22px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${({ $open }) =>
      $open
        ? "rotate(45deg) translate(7px, 7px)"
        : "rotate(0) translate(0, 0)"};
  }

  &:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: ${({ $open }) => ($open ? "scale(0)" : "scale(1)")};
  }

  &:nth-child(3) {
    transform: ${({ $open }) =>
      $open
        ? "rotate(-45deg) translate(7px, -7px)"
        : "rotate(0) translate(0, 0)"};
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
`;

export const LogoSquare = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #ff6b35;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 2px;
  margin-right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoSubtext = styled.div`
  font-size: 10px;
  color: #666;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (width <= 768px) {
    display: none;
  }
`;

export const NavLink = styled.button<{ $isActive: boolean }>`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.$isActive ? "#ff6b35" : "#333")};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background-color: #f5f5f5;
  }

  ${(props) =>
    props.$isActive &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background-color: #ff6b35;
      border-radius: 1px;
    }
  `}
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Greeting = styled.div`
  font-size: 14px;
  color: var(--secondary-color);
  font-weight: 500;
`;
