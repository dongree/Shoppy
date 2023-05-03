import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({
  info,
  info: { id, fileUrl, name, price, category },
}) {
  const navigate = useNavigate();

  return (
    <li
      className="cursor-pointer transition-all hover:scale-105 rounded-lg shadow-md overflow-hidden"
      onClick={() => navigate(`/products/${id}`, { state: { info } })}
    >
      <img src={fileUrl} alt="cloth" />
      <div className="flex justify-between items-center mb-1 mt-2 px-2 text-lg">
        <p className="truncate">{name}</p>
        <p>{`₩${price}`}</p>
      </div>
      <p className="text-sm text-gray-500 px-2 mb-2">{category}</p>
    </li>
  );
}
