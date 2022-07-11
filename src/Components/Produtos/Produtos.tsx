import { useEffect, useState } from "react";
import { Iproduto } from "../../@types/IProdutos";
import { apiProdutos } from "../../service/apiProdutos";
import { Card } from "./Card/Card";
import { ProdutosContainer } from "./styled";

export const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await apiProdutos();
      setProdutos(data.products);
    };
    getData();
  }, []);

//   console.log(produtos);
  return (
    <ProdutosContainer>
      {produtos.map((produto: Iproduto) => (
        
        <div key={produto.id}>
          <Card
            id={produto.id}
            imagem={produto.photo}
            titulo={produto.name}
            descricao={produto.description}
            preco={produto.price}
          />
        </div>
      ))}
    </ProdutosContainer>
  );
};
