import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json(); 
      setProducts(data);
    } 

    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition-transform duration-300">
          <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
          <h2 className="text-sm font-semibold mb-1 line-clamp-1">{product.title}</h2>
          <p className="text-gray-500 text-xs mb-2 line-clamp-2">{product.description}</p>
          <p className="text-gray-800 font-bold">${product.price}</p>
          <p className="text-yellow-500 text-xs mb-3">⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)</p>
          <button 
            onClick={() => handleAdd(product)} 
            className="bg-blue-500 text-white text-sm py-1 px-3 rounded-md w-full hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
