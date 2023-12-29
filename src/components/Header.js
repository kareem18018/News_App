import React from 'react';

const Header = () => (
  <header>
    <div className="header-content">
      <div className="logo">
        <h1> News Portal</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/News">News</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/About us">About Us</a></li>

        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
    </div>
  </header>
);

export default Header;
