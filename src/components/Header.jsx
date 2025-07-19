import React from 'react'
import '../assets/css/home/header.css'
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

export default function Header () {
	return(
    <header className="header">
      <div className="logo">
        <div className="logo-circle">GT</div>
        <span className="logo-text">GadgetTech</span>
      </div>

      <nav className="nav-links">
        <a href="/" className="active">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="search-cart-login">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="cart-icon">
          <FiShoppingCart />
          <span className="cart-count">3</span>
        </div>

        <button className="login-btn">Login</button>
      </div>
    </header>
)}
