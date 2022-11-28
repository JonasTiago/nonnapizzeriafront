import GlobalStyle from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import SignIn from "./pages/SignInPage/SignIn"
import SignUp from "./pages/SignUpPage/SignUp"
import Home from "./pages/HomePage/Home";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./pages/CheckoutPage/Checkout";

function App() {
  return (
    <>
    <UserProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
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
        </UserProvider>
    </>
  );
}

export default App;
