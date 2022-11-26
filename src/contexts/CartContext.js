import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  return (
    <CartContext.Provider
      value={{ productsCart, setProductsCart, openCart, setOpenCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
