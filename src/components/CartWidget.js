// src/components/CartWidget.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 

const CartWidget = () => {
  const { state } = useCart(); 
  const itemCount = state.items.length; 

  return (
    <Link to="/cart" className="cart-icon">
      🛒 {itemCount > 0 && <span>({itemCount})</span>} {/* Muestra la cantidad */}
    </Link>
  );
};

export default CartWidget;
