export const apiProdutos = async () => {
  const url = "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";
 
  const response = await fetch(url);
  const json = await response.json();

  return json;
};
