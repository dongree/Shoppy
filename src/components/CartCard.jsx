import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

export default function CartCard({ item }) {
  return (
    <li className="flex m-1">
      <div className=" basis-1/6 ">
        <img src={item.fileUrl} alt="cloth" className="rounded-lg" />
      </div>
      <div className="basis-5/6 flex justify-between items-center m-3">
        <div>
          <p>{item.name}</p>
          <p className=" text-red-400 font-semibold">{item.size}</p>
          <p>₩{item.price}</p>
        </div>
        <div className="flex items-center text-lg">
          <AiOutlineMinusSquare className="cursor-pointer" />
          <p className="mx-2">1</p>
          <AiOutlinePlusSquare className="cursor-pointer" />
          <BsFillTrashFill className="cursor-pointer mx-2" />
        </div>
      </div>
    </li>
  );
}
