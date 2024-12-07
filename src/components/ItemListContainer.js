import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Importar el hook useCart
import { Link } from 'react-router-dom';

// Productos mock con imágenes
const mockProducts = [
  { id: 1, name: 'Iphone 15', category: 'celulares', price: 500, image: 'images/iph15.jpg' },
  { id: 2, name: 'Procesador Ryzen 7', category: 'procesadores', price: 300, image: 'images/proce.jpg' },
  { id: 3, name: 'Placa RTX 3060', category: 'placas', price: 500, image: 'images/placa.jpg' },
];

const ItemListContainer = ({ title }) => { 
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Usamos el hook para agregar al carrito

  useEffect(() => {
    const filteredProducts = categoryId
      ? mockProducts.filter(product => product.category === categoryId)
      : mockProducts;
    setProducts(filteredProducts);
  }, [categoryId]);

  return (
    <div className="product-list">
      <h2>{title}</h2>
      {products.map(product => (
        <div key={product.id} className="product-item">
          {/* Redirigir al detalle del producto al hacer clic en la imagen */}
          <Link to={`/item/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button 
              className="add-to-cart"
              onClick={() => addToCart(product)} // Agregar al carrito
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
