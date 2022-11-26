import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";

export default function Header() {
  const { productsCart, openCart, setOpenCart } = useContext(CartContext);

  return (
    <HeaderStyle>
      <div>
        <h1>
          Nonna<span>Pizzeria</span>
        </h1>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Home</title>
              <path
                d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Person Add</title>
              <path
                d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z"
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
                d="M88 176v112M144 232H32"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
              onClick={() => setOpenCart(!openCart)}
            >
              <title>Cart</title>
              <circle
                cx="176"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <circle
                cx="400"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M48 80h64l48 272h256"
              />
              <path
                d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
            {productsCart.length > 0 && (
              <NotificationStyle>
                <span>{productsCart.length}</span>
              </NotificationStyle>
            )}
          </li>
        </ul>
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #d96704;
  width: 100vw;
  height: 6vh;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 100%;
    margin: auto;
    padding: 0 50px 0 0;
  }
  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #730202;
    > span {
      color: #667302;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    li {
      margin-left: 50px;
      width: 30px;
      font-weight:bold;
      cursor: pointer;
      color: #730202;

      :hover {
        color: #667302;
      }
    }
  }
`;

const NotificationStyle = styled.div`
  position: fixed;
  top: 0;
  margin: 5px 0px 0px 26px;
  background-color: #667302;
  border:1px solid #667302;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  color: #ffffff;
  text-align: center;
  padding: 4px;
  > span {
    font-size: 18px;
    margin: auto;
    font-family: monospace, sans-serif;
  }
`;
