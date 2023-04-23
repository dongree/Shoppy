import React, { useState } from 'react';
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { loginByGoogle, logout } from '../firebase';

export default function Header() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <header className="flex justify-between items-center p-4 border-b-2 border-">
      <div
        className="flex items-center text-red-400 text-2xl font-semibold cursor-pointer"
        onClick={() => navigate('/', {})}
      >
        <AiOutlineShopping />
        <h1>Shoppy</h1>
      </div>
      <div className="flex font-semibold text-base items-center">
        <p
          className="mx-2 cursor-pointer"
          onClick={() => navigate('/products', {})}
        >
          Products
        </p>
        <div
          className="relative py-2 pr-2 cursor-pointer mx-2"
          onClick={() => navigate('/cart', {})}
        >
          <AiOutlineShoppingCart className="w-6 h-6" />
          <div
            className={`w-4 h-4 bg-red-400 absolute top-1 rounded-full flex justify-center text-xs right-1 text-white ${
              isLogin ? '' : 'hidden'
            }`}
          >
            0
          </div>
        </div>

        <BsFillPencilFill
          className={`mx-2 cursor-pointer w-6 h-6 ${isLogin ? '' : 'hidden'}`}
          onClick={() => navigate('/add', {})}
        />
        <div className={`flex mx-2 items-center ${isLogin ? '' : 'hidden'}`}>
          <img src="logo192.png" alt="profile" className="w-6 h-6 mr-1" />
          <p>{username}</p>
        </div>
        {isLogin ? (
          <button
            className="mx-2 cursor-pointer bg-red-400 text-white px-3 py-1 text-lg rounded-md"
            onClick={() => logout().then(() => setIsLogin(false))}
          >
            Logout
          </button>
        ) : (
          <button
            className="mx-2 cursor-pointer bg-red-400 text-white px-3 py-1 text-lg rounded-md"
            onClick={() => {
              loginByGoogle().then(user => {
                setIsLogin(true);
              });
            }}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}
