import { Button } from "../../Button/Button";
import { CardContainer } from "./styled";
import sacola from "../../../assets/imgs/sacola.svg";
import { ICard } from "../../../@types/ICard";
import { useCart } from "../../../context/cartContext";

export const Card = ({id,imagem,titulo,descricao,preco}:ICard) => {

    const {count,setCount,selectedCart,setSelectedCart} = useCart()
    
    const handleClick =(id:number)=> {
       const produtoSelecionado = {
        id
       }  
       setSelectedCart([produtoSelecionado])
    }
    console.log(selectedCart)
    return (

        <CardContainer>
            <img src={imagem} alt="photo" />
            <p>{titulo}</p>
            <p>R${parseInt(preco)}</p>
            <p>{descricao}</p>

            <Button
            onClick={(e)=>  handleClick(id)}
            icone={sacola}
            texto={"comprar"}
            />
        </CardContainer>
    )
}
