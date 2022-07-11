import React from "react";
import { Button } from "../Button/Button";
import { HeaderContainer, Logo } from "./styled";
import carrinho from "../../assets/imgs/carrinho.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>

      <Button
        icone={carrinho}
        texto={0}
      />
    </HeaderContainer>
  );
};

