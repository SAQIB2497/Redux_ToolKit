import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="flex items-center bg-white shadow-md p-4 rounded-xl">
            <img src={product.image} alt={product.title} className="w-20 h-20 object-contain mr-4" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-600">Quantity: 1</p>
            </div>
            <p className="text-lg font-bold">${product.price}</p>
            <button 
              onClick={() => handleRemove(product.id)} 
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-right mt-8 text-xl font-bold">
        Total: ${products.reduce((total, product) => total + product.price, 0).toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
