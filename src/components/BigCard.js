import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";

export default function BigCard({ product }) {
  const { productsCart, setProductsCart } = useContext(CartContext);

  function fillCart(price) {
    const quantityProducts = productsCart.filter(
      (productCart) => productCart._id === product._id
    );

    const quantityTotal = quantityProducts[0]?.quantity ? parseInt(quantityProducts[0].quantity) + 1 : 1;

    
    const productAddCart = {
      name: product.name,
      description: product.description,
      price: parseFloat(price).toFixed(2),
      _id: product._id,
      quantity: quantityTotal,
    };

    quantityProducts?.length
      ? setProductsCart([
          ...productsCart.filter(
            (productCart) => productCart._id !== product._id
          ),
          productAddCart,
        ])
      : setProductsCart([...productsCart, productAddCart]);
  }

  return (
    <BigCardStyle>
      <ProductDetails>
        <h3>{product.name}</h3>
        <img
          src={
            "https://media-cdn.tripadvisor.com/media/photo-s/16/5a/ea/95/marguerita.jpg"
          }
          alt={product.name}
        />
        <p>{product.description}</p>
        <PriceStyle>
          <button onClick={() => fillCart(parseFloat(product.price))}>
            Adicionar ao Carrinho
            <br />
            R$ {parseFloat(product.price).toFixed(2)}
          </button>
        </PriceStyle>
      </ProductDetails>
    </BigCardStyle>
  );
}

const BigCardStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const ProductDetails = styled.div`
  width: 40%;
  height: 70%;
  background-color: #ffffff;
  margin: auto;
  margin-top: 5%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 3px black;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > h3 {
    font-size: 35px;
  }

  > img {
    width: 70%;
    margin: auto;
    height: 60%;
  }
  > p {
    font-size: 25px;
    margin-bottom: 35px;
  }
`;

const PriceStyle = styled.div`
  button {
    background-color: #d96704;
    border: none;
    margin: 10px 20px;
    width: 250px;
    height: 65px;
    cursor: pointer;
    box-shadow: 0 0 2px black;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;

    :hover {
      opacity: 0.888;
    }
  }
`;
