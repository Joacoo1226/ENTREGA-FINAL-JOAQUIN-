// src/context/CartContext.js
import { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveer el contexto a los componentes hijos
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  // Función para obtener el total de productos en el carrito
  const getCartCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al carrito desde cualquier componente
export const useCart = () => {
  return useContext(CartContext);
};

