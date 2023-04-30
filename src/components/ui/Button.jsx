import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className=" cursor-pointer bg-red-400 text-white px-3 py-1 text-lg rounded-md hover:brightness-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
