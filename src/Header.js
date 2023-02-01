import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Header = (props) => {
  return (
    <header className={`header ${props.color}`}>
      <div className="container">
        <div className="all-header">
          <div className="left-header">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Category</li>
              <li>Cart</li>
            </ul>
          </div>

          <div className="right-header">
            <AiOutlineShoppingCart size={24} />
            <span>{props.cart}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
