import { useState, useEffect } from "react";
import * as S from "./CookiesManagement.styled";
import { Button } from "../../../micro-frontends/shared";

export function CookiesManagement() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <S.Banner>
      <S.Content>
        <S.Title>
          <S.Icon>🍪</S.Icon>
          Preferências
        </S.Title>
        <S.Description>
          Este site utiliza ferramentas para melhorar sua experiência. Ao
          continuar navegando, você concorda com a manipulação de dados.
        </S.Description>
      </S.Content>
      <S.ButtonContainer>
        <Button
          onClick={handleAcceptCookies}
          variant="primary"
          style={{
            padding: ".3rem 1.5em",
            fontSize: "clamp(0.7rem, 0.4714rem + 0.3571vw, 0.9rem)",
            textTransform: "uppercase",
            borderRadius: ".4em",
          }}>
          Concordo
        </Button>
      </S.ButtonContainer>
    </S.Banner>
  );
}
