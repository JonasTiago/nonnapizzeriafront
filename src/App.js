import Home from "./pages/HomePage/Home";
import GlobalStyle from "./components/GlobalStyles";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./pages/CheckoutPage/Checkout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <ShoppingCart />
      {/* <Checkout /> */}
    </>
  );
}

export default App;
