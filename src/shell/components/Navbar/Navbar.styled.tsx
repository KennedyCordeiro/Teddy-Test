import styled from "styled-components";

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
  /* gap: 16px; */
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const HamburgerLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: #333;
  border-radius: 1px;
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
