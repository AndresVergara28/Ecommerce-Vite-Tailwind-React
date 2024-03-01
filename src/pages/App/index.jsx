import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { Category } from "../Category";
import { MyAccount } from "../MyAccount";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { MyOrders } from "../MyOrders";
import { MyOrder } from "../MyOrder";
import { MyOrderByID } from "../MyOrderByID";

import "./App.css";
import { NavBar } from "../../components/NavBar";
import { CheckoutSideMenu } from "../../components/CheckoutDetail";
import { CartProvider } from "../../context";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Category /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/:index", element: <MyOrderByID /> },
    { path: "/my-order/last", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
