import styled from "styled-components";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px 16px";
      case "large":
        return "16px 32px";
      default:
        return "12px 24px";
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "18px";
      default:
        return "16px";
    }
  }};

  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  background: ${(props) => {
    switch (props.variant) {
      case "secondary":
        return "var(--details-color)";
      case "danger":
        return "#dc3545";
      default:
        return "#667eea";
    }
  }};

  color: white;

  &:hover {
    transform: translateY(-5px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export function Button({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </StyledButton>
  );
}
