import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFirebase } from '../context/firebaseContext';

export default function Detail() {
  const location = useLocation();
  const info = location.state.info;
  const { id, fileUrl, name, price, category, description, options } = info;
  const { firebase } = useFirebase();
  const [size, setSize] = useState();
  const [isAdd, setIsAdd] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (sessionStorage.length !== 0) {
      const uid = JSON.parse(
        sessionStorage.getItem(
          `firebase:authUser:${process.env.REACT_APP_FIREBASE_API_KEY}:[DEFAULT]`
        )
      ).uid;

      firebase.addCartItemByUser(
        uid,
        id + size,
        fileUrl,
        name,
        price,
        category,
        description,
        options,
        size
      );
    }

    setIsAdd(true);
  };

  return (
    <div>
      <p className="m-3">{`>${category}`}</p>
      <div className="flex w-full">
        <div className="basis-1/2">
          <img src={fileUrl} alt="cloth" />
        </div>
        <div className="flex flex-col basis-1/2 mx-5 my-2">
          <div className="text-2xl border-b-2 font-semibold">
            <p className="mb-3">{name}</p>
            <p className="my-2">₩{price}</p>
          </div>
          <p className="my-3">{description}</p>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <p className="w-10 text-red-400 font-bold mr-2">옵션: </p>
              <select
                className="w-full border-2 border-dashed border-red-400	px-2 outline-none	"
                name="option"
                id=""
                onChange={e => {
                  setSize(e.target.value);
                }}
              >
                <option value="XXS">XXS</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            <button className="bg-red-400 w-4/5 mx-auto text-xl text-white font-semibold my-4 p-1">
              장바구니 추가
            </button>
          </form>
          {isAdd ? <p>✅ 장바구니에 추가되었습니다.</p> : ''}
        </div>
      </div>
    </div>
  );
}
