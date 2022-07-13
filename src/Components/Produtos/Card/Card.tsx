import { Button } from "../../Button/Button";
import { CardContainer } from "./styled";
import sacola from "../../../assets/imgs/sacola.svg";
import { ICard } from "../../../@types/ICard";
import { addToCart } from "../../../redux/action";
import { useDispatch } from "react-redux";

export const Card = ({id,imagem,titulo,descricao,preco}:ICard) => {
    const dispatch = useDispatch();
    
    const product = {
        id: id,
        title: titulo,
        image: imagem,
        price: preco,
    }
    return (

        <CardContainer>
            <img src={imagem} alt="photo" />
            <p>{titulo}</p>
            <p>R${parseInt(preco)}</p>
            <p>{descricao}</p>

            <Button
            onClick={()=> dispatch(addToCart(product))}
            icone={sacola}
            texto={"comprar"}
            />
        </CardContainer>
    )
}
