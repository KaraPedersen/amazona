import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div classlist="grid-container">
    <header classlist="header">
      <div classlist="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">amazona</a>
      </div>
      <div classlist="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside classlist="sidebar">
      <h3>Shopping Categories</h3>
      <button classlist="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>
      </ul>
    </aside>
    <main classlist="main">
      <div classlist="content">
        <ul classlist="products">
          <li>
            <div classlist="product">
              <img classlist="product-image" src="../public/images/d1.jpg" alt="product" />
              <div classlist="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div classlist="product-brand">Nike</div>
              <div classlist="product-price">$60</div>
              <div classlist="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div classlist="product">
              <img classlist="product-image" src="/images/d1.jpg" alt="product" />
              <div classlist="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div classlist="product-brand">Nike</div>
              <div classlist="product-price">$60</div>
              <div classlist="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div classlist="product">
              <img classlist="product-image" src="/images/d1.jpg" alt="product" />
              <div classlist="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div classlist="product-brand">Nike</div>
              <div classlist="product-price">$60</div>
              <div classlist="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div classlist="product">
              <img classlist="product-image" src="/images/d1.jpg" alt="product" />
              <div classlist="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div classlist="product-brand">Nike</div>
              <div classlist="product-price">$60</div>
              <div classlist="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div classlist="product">
              <img classlist="product-image" src="/images/d1.jpg" alt="product" />
              <div classlist="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div classlist="product-brand">Nike</div>
              <div classlist="product-price">$60</div>
              <div classlist="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div classlist="product">
              <img classlist="product-image" src="/images/d1.jpg" alt="product" />
              <div classlist="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div classlist ="product-brand">Nike</div>
              <div classlist ="product-price">$60</div>
              <div classlist ="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer classlist="footer">
      All rights reserved.
    </footer>
  </div>
 
  );
}

export default App;
