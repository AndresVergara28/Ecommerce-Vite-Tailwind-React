import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between px-5 py-3 sticky z-10 items-center w-full ">
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
          <NavLink to="/my-orders">My orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sig in</NavLink>
        </li>
        <li>
          <NavLink to="/cart">🛒</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
