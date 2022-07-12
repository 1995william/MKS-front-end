import { Container, FinalizarCompra, Total } from "./styled";
import fechar from "../../assets/imgs/x.svg";
import { ListaCompras } from "./ListaCompras/Lista";
import { Button } from "../Button/Button";
import { useState } from "react";

interface ImenuCompras {
    open: boolean;
}
export const MenuCompras = ({open}:ImenuCompras) => {
    const [menuClose,setMenuClose] = useState(true);
// let menuOpen = open

  
     
      
    
    console.log(menuClose)
  return (
    <Container menuOpen={ open || menuClose} >
      <article>
        <h1>
          Carrinho de <br />
          compras
        </h1>
        <Button icone={fechar} 
        onClick={()=>  setMenuClose(!menuClose)}
        />
      </article>
      <ListaCompras />
      <Total>
        <p>Total:</p>
        <p>R$798</p>
      </Total>
      <FinalizarCompra>
        <p>Finalizar Compra</p>
      </FinalizarCompra>
    </Container>
  );
};
