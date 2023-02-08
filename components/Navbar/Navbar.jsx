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
      <div className="navbar-end space-x-2 lg:space-x-5">
        <div className="flex-none ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-secondary shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-sm btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
