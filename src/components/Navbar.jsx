import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const item = useSelector((state) => state.cart);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-bold">Redux</a>
        <ul className="flex space-x-6 items-center">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li>
            <Link to="/cart" className="text-white hover:text-gray-300 relative">
              <FaShoppingCart size={22} />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">{item.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
