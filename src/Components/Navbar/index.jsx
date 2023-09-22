import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : null)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={({ isActive }) => (isActive ? activeStyle : null)}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyle : null)}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/furnitures" className={({ isActive }) => (isActive ? activeStyle : null)}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : null)}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/others" className={({ isActive }) => (isActive ? activeStyle : null)}>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">teff@platzi.com</li>
        <li>
          <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : null)}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : null)}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={({ isActive }) => (isActive ? activeStyle : null)}>
            Sign In
          </NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
}

export default Navbar;
