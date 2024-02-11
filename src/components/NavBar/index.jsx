import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";

  const { count, cart, toggleCheckoutDetail } = useContext(CartContext);

  return (
    <nav className="flex justify-between px-5 py-5 fixed top-0 z-10 items-center w-full bg-white border-b-2 rounded">
      <ul className="navbar-left-side flex items-end gap-2">
        <li className="font-bold">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
      </ul>

      <ul className="navbar-right-side flex items-end gap-2">
        <li className="text-black/60">pipevergara28@hotmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sig in
          </NavLink>
        </li>
        <li
          className="flex"
          onClick={() => {
            toggleCheckoutDetail();
          }}
        >
          <NavLink to="#">
            <ShoppingCartIcon className="h-6 w-6"></ShoppingCartIcon>
          </NavLink>
          <p>{cart.length}</p>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
