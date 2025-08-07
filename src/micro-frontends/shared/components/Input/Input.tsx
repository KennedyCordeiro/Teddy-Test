import styled from "styled-components";

export interface InputProps {
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  required?: boolean;
  name?: string;
}

const StyledInput = styled.input<InputProps>`
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px 12px";
      case "large":
        return "16px 20px";
      default:
        return "12px 16px";
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

  border: 2px solid #e9ecef;
  border-radius: 6px;
  transition: border-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #6c757d;
  }
`;

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  size = "medium",
  disabled = false,
  required = false,
  name,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size={size}
      disabled={disabled}
      required={required}
      name={name}
    />
  );
}
