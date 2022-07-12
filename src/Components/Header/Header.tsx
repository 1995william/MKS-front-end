import { useState } from "react";
import { Button } from "../Button/Button";
import { HeaderContainer, Logo } from "./styled";
import carrinho from "../../assets/imgs/carrinho.svg";
import { MenuCompras } from "../MenuCompras/MenuCompras";

export const Header = () => {

  const [menuOpen,setMenuOpen] = useState(false);
 
 
  return (
    <>
      {/* <MenuCompras open={menuOpen} /> */}
    <HeaderContainer>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>

      <Button
        icone={carrinho}
        texto={0}
        onClick={()=>setMenuOpen(!menuOpen)}
        />
    </HeaderContainer>
        </>
  );
};

