import React from 'react';

export default function PriceBox({ title, price }) {
  return (
    <div className="flex flex-col bg-gray-100 text-lg px-10 py-5 rounded-md">
      <p>{title}</p>
      <p className="text-red-400 font-semibold">₩{price}</p>
    </div>
  );
}
