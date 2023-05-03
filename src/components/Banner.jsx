import React from 'react';

export default function Banner() {
  return (
    // <section className="flex flex-col items-center justify-center text-white h-72 bg-clothes bg-cover">
    //   <p className="text-5xl mb-3">Shop With Us</p>
    //   <p>Best Products, High Quality</p>
    // </section>

    <section className="h-72 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-clothes opacity-80"></div>
      <div className="absolute w-full top-24 text-center text-gray-50 drop-shadow-2xl">
        <p className="text-5xl mb-3">Shop With Us</p>
        <p>Best Products, High Quality</p>
      </div>
    </section>
  );
}
