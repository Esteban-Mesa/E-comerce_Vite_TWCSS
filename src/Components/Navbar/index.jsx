import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContex } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const { count, setCategoryToFilter } = useContext(ShoppingCartContex);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="bg-np_orange text-np_white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="text-np_yellow font-bold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={() => {
              setCategoryToFilter(null);
            }}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={() => {
              setCategoryToFilter("electronics");
            }}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={() => {
              setCategoryToFilter("jewelery");
            }}>
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's clothing"
            className={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={() => {
              setCategoryToFilter("men's clothing");
            }}>
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's clothing"
            className={({ isActive }) => (isActive ? activeStyle : null)}
            onClick={() => {
              setCategoryToFilter("women's clothing");
            }}>
            Women's clothing
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
        <li className="flex justify-center gap-0.5">
          <ShoppingBagIcon className="w-4" />
          {count}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
