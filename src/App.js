// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext'; // Importamos el CartProvider
import Cart from './components/Cart'; // Asegúrate de importar la página del carrito

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title="Catálogo de Productos" />} />
          <Route path="/category/:id" element={<ItemListContainer title="Catálogo de Productos" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

