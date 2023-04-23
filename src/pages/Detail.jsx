import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Detail() {
  const location = useLocation();
  const { img, name, price, category, description } = location.state.info;

  return (
    <div>
      <p className="m-3">{`>${category}`}</p>
      <div className="flex w-full">
        <div className="basis-1/2">
          <img src={img} alt="cloth" />
        </div>
        <div className="flex flex-col basis-1/2 mx-5 my-2">
          <div className="text-2xl border-b-2 font-semibold">
            <p className="mb-3">{name}</p>
            <p className="my-2">₩{price}</p>
          </div>
          <p className="my-3">{description}</p>
          <form className="flex items-center">
            <p className="w-10 text-red-400 font-bold mr-2">옵션: </p>
            <select
              className="w-full border-2 border-dashed border-red-400	px-2 outline-none	"
              name="option"
              id=""
            >
              <option value="xxs">XXS</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </form>
          <button className="bg-red-400 w-4/5 mx-auto text-xl text-white font-semibold my-4 p-1">
            장바구니 추가
          </button>
        </div>
      </div>
    </div>
  );
}
