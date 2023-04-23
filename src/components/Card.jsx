import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ info }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer duration-200 ease-in-out hover:scale-105"
      onClick={() => navigate(`/products/${info.id}`, { state: { info } })}
    >
      <img src={info.img} alt="cloth" />
      <div className="flex justify-between text-sm mb-1">
        <p>{info.name}</p>
        <p>₩{info.price}</p>
      </div>
      <p className="text-xs text-gray-500">{info.category}</p>
    </div>
  );
}
