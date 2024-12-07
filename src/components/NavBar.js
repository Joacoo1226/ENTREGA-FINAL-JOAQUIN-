// src/components/NavBar.js
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../components/CartContext'; // Importa solo el hook useCart
import './NavBar.css';


const NavBar = () => {
  const { getCartCount } = useCart(); // Accede al número de productos en el carrito

  return (
    <nav className="navbar">
      <Link to="/" className="logo">AZ TECH</Link>
      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart size={30} />
          <span className="cart-count">{getCartCount()}</span> {/* Muestra el número total de productos */}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
