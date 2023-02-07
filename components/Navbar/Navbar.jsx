import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Products</Link>
      </li>
      <li>
        <Link href="/">About Us</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-accent text-white lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost normal-case text-2xl flex items-center  "
        >
          {/* <img src="/assets/logo.png" className="w-8 h-8 mr-2" alt="" /> */}
          <p>Earthly</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <motion.button
          whileTap={{ scale: [1, 0.6, 1] }}
          className="bg-primary text-sm font-medium text-white py-3 px-7 rounded-xl uppercase"
        >
          signUp
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
