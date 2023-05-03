import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addCartItemByUser, onUserStateChange } from '../api/firebase';
import Button from '../components/ui/Button';

export default function Detail() {
  const {
    state: {
      info: { id, fileUrl, name, price, category, description, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);
  const [isAdd, setIsAdd] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    onUserStateChange(user =>
      addCartItemByUser(
        user.uid,
        id + selected,
        fileUrl,
        name,
        price,
        category,
        description,
        options,
        selected
      )
    );
    setIsAdd(true);
  };

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  return (
    <>
      <p className="m-3">{`>${category}`}</p>
      <section className="flex flex-col md:flex-row">
        <div className="w-full basis-1/2  px-4">
          <img src={fileUrl} alt="cloth" />
        </div>
        <div className="w-full basis-1/2 flex flex-col  mx-5 my-2 ">
          <div className="text-2xl font-semibold border-b border-gray-400">
            <p className="mb-3">{name}</p>
            <p className="my-2">₩{price}</p>
          </div>
          <p className="my-3">{description}</p>
          <div className="flex items-center">
            <label
              htmlFor="select"
              className="w-10 text-red-400 font-bold mr-2"
            >
              옵션:{' '}
            </label>
            <select
              id="select"
              className="flex-1 border-2 border-dashed border-red-400	px-2 outline-none	"
              name="option"
              value={selected}
              onChange={handleSelect}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick}></Button>
          {isAdd ? <p>✅ 장바구니에 추가되었습니다.</p> : ''}
        </div>
      </section>
    </>
  );
}
