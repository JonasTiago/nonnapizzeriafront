import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import { CartContext } from "../../contexts/CartContext";

export default function Checkout() {
  const { productsCart } = useContext(CartContext);
  const { total } = useParams();
  const [payment, setPayment] = useState();

  function fillForm(e) {
    e.preventDefault();
    setPayment(e.target.value);
  }

  function checkout(e) {
    e.preventDefault();
    const products = [];
    productsCart.forEach((product) => {
      products.push({
        _id: product._id,
        quantity: product.quantity,
      });
    });

    const demand = {
      products,
      priceTotal: total,
      payment,
    };
    console.log(demand);
  }

  return (
    <>
      <Header />
      <CheckoutStyle>
        <h2>Checkout</h2>
        <div>
          <FormStyle>
            <h3>Como você prefere pagar?</h3>
            <form onSubmit={checkout}>
              <fieldset>
                <label htmlFor="credit">
                  <input
                    type="radio"
                    name="payments"
                    value="credit"
                    id="credit"
                    onChange={fillForm}
                    required
                  />
                  Cartão de Credito
                </label>
                <label htmlFor="debt">
                  <input
                    type="radio"
                    name="payments"
                    value="debt"
                    id="debt"
                    onChange={fillForm}
                    required
                  />
                  Cartão de Debito
                </label>
                <label htmlFor="pix">
                  <input
                    type="radio"
                    name="payments"
                    value="pix"
                    id="pix"
                    onChange={fillForm}
                    required
                  />
                  Pix
                </label>
              </fieldset>
              <input
                type="submit"
                value="Finalizar pedido"
                onClick={checkout}
              />
            </form>
          </FormStyle>
          <DetailsStyle>
            <h4>Detalhes da sua compra</h4>

            <div>
              <div>
                <p>Produtos</p>
                <span>R$ {total}</span>
              </div>
              <div>
                <p>Envio</p>
                <span>R$ 10.00</span>
              </div>
            </div>

            <div>
              <p>Você pagará</p>
              <span>R$ {parseFloat(parseInt(total) + 10).toFixed(2)}</span>
            </div>
          </DetailsStyle>
        </div>
      </CheckoutStyle>
    </>
  );
}
const CheckoutStyle = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 4.8rem;
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  > div {
    width: 65vw;
    height: 60vh;
    background-color: #ffffee;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    padding: 35px;
  }
`;

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 20px;

  h3 {
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 28px;

    fieldset {
      display: flex;
      flex-direction: column;
      margin: 50px 0;

      label {
        margin: 20px 0;
        input[type="radio"] {
          margin: 10px 20px;
          width: 20px;
          height: 20px;
        }
      }
    }

    input[type="submit"] {
      width: 250px;
      height: 50px;
      background-color: red;
    }
  }
`;

const DetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefeff;
  border: 1px solid black;
  border-radius: 5px;
  height: 80%;
  margin-top: 65px;
  padding: 35px;
  h4 {
    font-size: 1.8rem;
    margin-bottom: 35px;
  }
  > :nth-child(2) {
    font-size: 22px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 10rem;
    border-bottom: 1px solid black;
    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      width: 100%;
      padding-bottom: 20px;
    }
  }
  > :nth-child(3) {
    font-size: 22px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
