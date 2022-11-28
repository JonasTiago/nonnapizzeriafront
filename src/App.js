import GlobalStyle from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUpPage/SignUp"
import Home from "./pages/HomePage/Home";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./pages/CheckoutPage/Checkout";

function App() {
  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/cadastro" element={<SignUp />} />
            <Route
              path="/produtos"
              element={
                <>
                  <Home /> <ShoppingCart />
                </>
              }
            />
          </Routes>
          {/* <Checkout /> */}
        </BrowserRouter>
    </>
  );
}

export default App;
