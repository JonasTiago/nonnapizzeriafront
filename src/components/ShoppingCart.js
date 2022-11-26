import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";

export default function ShoppingCart() {
  const { productsCart, setProductsCart, openCart, setOpenCart } =
    useContext(CartContext);
  const [priceTotal, setPreceTotal] = useState();

  useEffect(() => {
    const prices = productsCart.map((product) => parseInt(product.price)*(product.amount));
    const priceSum = prices.length ? prices.reduce((a, b) => a + b) : 0;

    setPreceTotal(parseInt(priceSum).toFixed(2));
  }, [productsCart]);

  function removerProduct(id){
    const itemCart = productsCart.filter(product => product.id !== id)
    setProductsCart(itemCart)
  }

  return (
    <CartStyle open={openCart}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
          onClick={() => setOpenCart(!openCart)}
        >
          <title>Close Circle</title>
          <path
            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M320 320L192 192M192 320l128-128"
          />
        </svg>
        <h3>Seu Carrinho</h3>
        <hr />
      </div>
      <section>
        {productsCart?.map((product) => (
          <RequestStyle key={product.id}>
            <div>
              <h5>
                {product.name}
              </h5>
            </div>
            <span>{product.amount}</span>
            <span>{product.price*product.amount}</span>
            <p onClick={() => removerProduct(product.id)}>Remover</p>
          </RequestStyle>
        ))}
      </section>
      <TotalStyle>
        <p>Total</p>
        <span>{priceTotal}</span>
      </TotalStyle>
      <button>Finalizar Pedido</button>
    </CartStyle>
  );
}

const CartStyle = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;

  background-color: #fff;
  height: 94vh;
  width: ${(props) => (props.open ? "25%" : "0")};
  transition: width 500s;

  padding: 35px 15px;

  display: ${(props) =>
    props.open ? "flex" : "none"}; //aqui mostra o companet
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 30px;
    color: #730202;
    font-weight: bold;
    margin-top: 30px;
  }

  svg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 25px;
    color: #ff0000;
    cursor: pointer;
  }

  > button {
    background-color: #667302;
    color: #730202;
    width: 80%;
    height: 50px;
    margin: 10px auto 20px auto;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 2px black;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;

    :hover {
      opacity: 0.8;
      color: #bf0413;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    height: 80%;
  }
`;

const RequestStyle = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px;
  font-size: 25px;
  border-bottom: 1px solid #dedede;
  margin-top: 20px;
  position:relative;
  > div {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    margin-bottom:20px;
    > h5 {
      font-size: 24px;
    }
  }
  > p {
    color: #bf0413;
    font-size: 1.123rem;
    position:absolute;
    bottom:2px;
    left:5px;
    cursor: pointer;
    :hover{
      color:#ff0000;
    }
  }
`;

const TotalStyle = styled.div`
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 15px;
`;
