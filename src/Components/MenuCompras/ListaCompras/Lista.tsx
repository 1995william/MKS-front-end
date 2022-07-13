import { Fechar, ListaItens } from "./styled";
import { Button } from "../../Button/Button";
import fechar from "../../../assets/imgs/x.svg";
import { useDispatch, useSelector } from "react-redux";
import { Total } from "../styled";
import { removeFromCart } from "../../../redux/action";
import { useState } from "react";

export const ListaCompras = () => {
  const products = useSelector((state: any) => state.cartData);
  const dispatch = useDispatch();
  const [qtd, setQtd] = useState(1);

  let total = 0;

  const handleClick = (product: any) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      <ListaItens size={products.length}>
        {products.map((product: any) => {
          {
            total += parseInt(product.price) * qtd;
          }

          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <section>
                <p>Qtd:</p>
                <div>
                  <button onClick={() => setQtd(qtd > 1 ? qtd - 1 : 1)}>-</button>
                  <p>{qtd}</p>
                  <button onClick={() => setQtd(qtd + 1)}>+</button>
                </div>
              </section>
              <p>R${parseInt(product.price)}</p>
              <Fechar>
                <Button icone={fechar} onClick={() => handleClick(product)} />
              </Fechar>
            </li>
          );
        })}
      </ListaItens>
      <Total>
        <p>Total:</p>
        <p>R${total}</p>
      </Total>
    </>
  );
};
