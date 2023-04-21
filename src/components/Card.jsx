import React from 'react';

export default function Card({ info }) {
  return (
    <div className="cursor-pointer duration-200 ease-in-out hover:scale-105">
      <img src={info.img} alt="cloth" />
      <div className="flex justify-between text-sm mb-1">
        <p>{info.name}</p>
        <p>₩{info.price}</p>
      </div>
      <p className="text-xs text-gray-500">{info.type}</p>
    </div>
  );
}