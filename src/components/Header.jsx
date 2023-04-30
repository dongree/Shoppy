import React, { useEffect, useState } from 'react';
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  getCartItemsNum,
  login,
  logout,
  onUserStateChange,
} from '../api/firebase';
import User from './User';

export default function Header() {
  const [user, setUser] = useState();
  const [cartItemNums, setCartItemNums] = useState(0);

  useEffect(() => {
    onUserStateChange(user => {
      setUser(user);
      getCartItemsNum(user.uid).then(nums => setCartItemNums(nums));
    });
  }, []);

  return (
    <header className="flex justify-between items-center p-4 border-b-2 border-gray-300">
      <Link
        to="/"
        className="flex items-center text-red-400 text-2xl font-semibold cursor-pointer"
      >
        <AiOutlineShopping />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex font-semibold text-base items-center gap-4">
        <Link to="/products" className=" cursor-pointer">
          Products
        </Link>
        <Link to="/cart" className="relative py-2 pr-2 cursor-pointer ">
          <AiOutlineShoppingCart className="w-6 h-6" />
          <div
            className={`w-4 h-4 bg-red-400 absolute top-1 rounded-full flex justify-center text-xs right-1 text-white ${
              user ? '' : 'hidden'
            }`}
          >
            {cartItemNums}
          </div>
        </Link>
        <Link
          to="/add"
          className={`flex items-center justify-center cursor-pointer w-6 h-6 ${
            user ? '' : 'hidden'
          }`}
        >
          <BsFillPencilFill />
        </Link>
        {user && <User user={user} />}
        {user ? (
          <button
            className=" cursor-pointer bg-red-400 text-white px-3 py-1 text-lg rounded-md"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <button
            className=" cursor-pointer bg-red-400 text-white px-3 py-1 text-lg rounded-md"
            onClick={login}
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
}
