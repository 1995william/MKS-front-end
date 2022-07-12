import { Fechar, ListaItens } from "./styled";
import teste from "../../../assets/imgs/teste.jpg";
import { Button } from "../../Button/Button";
import fechar from "../../../assets/imgs/x.svg";

export const ListaCompras = () => {
  return (
    <ListaItens>
      <li>
        <img src={teste} alt="photo" />
        <p>Iphone 11 128 GB</p>

        <section>
          <p>Qtd:</p>
          <div>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </section>
        <p>R$5000</p>
        <Fechar>
          <Button icone={fechar} />
        </Fechar>
      </li>
    </ListaItens>
  );
};
