import React, { useEffect, useState } from 'react';
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/firebaseContext';

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [cartItemNums, setCartItemNums] = useState(0);
  const { firebase } = useFirebase();

  useEffect(() => {
    if (sessionStorage.length !== 0) setIsLogin(true);
  }, []);

  useEffect(() => {
    if (sessionStorage.length !== 0) {
      const uid = JSON.parse(
        sessionStorage.getItem(
          `firebase:authUser:${process.env.REACT_APP_FIREBASE_API_KEY}:[DEFAULT]`
        )
      ).uid;
      firebase.getCartItemsNum(uid).then(nums => setCartItemNums(nums));
    }
  });

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
              isLogin ? '' : 'hidden'
            }`}
          >
            {cartItemNums}
          </div>
        </Link>
        <Link
          to="/add"
          className={`flex items-center justify-center cursor-pointer w-6 h-6 ${
            isLogin ? '' : 'hidden'
          }`}
        >
          <BsFillPencilFill />
        </Link>
        <div className={`flex  items-center ${isLogin ? '' : 'hidden'}`}>
          <img src="logo192.png" alt="profile" className="w-6 h-6 mr-1" />
          <p>{username}</p>
        </div>
        {isLogin ? (
          <button
            className=" cursor-pointer bg-red-400 text-white px-3 py-1 text-lg rounded-md"
            onClick={() => firebase.logout().then(() => setIsLogin(false))}
          >
            Logout
          </button>
        ) : (
          <button
            className=" cursor-pointer bg-red-400 text-white px-3 py-1 text-lg rounded-md"
            onClick={() => {
              firebase.loginByGoogle().then(user => {
                console.log(user);
                setUsername(user.displayName);
                setIsLogin(true);
              });
            }}
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
}
