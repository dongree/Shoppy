import React, { useEffect, useState } from 'react';
import CartCard from '../components/CartCard';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaEquals } from 'react-icons/fa';
import PriceBox from '../components/PriceBox';
import { useFirebase } from '../context/firebaseContext';

export default function Cart() {
  const [data, setData] = useState([]);
  const [priceSum, setPriceSum] = useState();
  const { firebase } = useFirebase();

  useEffect(() => {
    const uid = JSON.parse(
      sessionStorage.getItem(
        `firebase:authUser:${process.env.REACT_APP_FIREBASE_API_KEY}:[DEFAULT]`
      )
    ).uid;
    firebase.getCartItems(uid).then(d => setData(d));
  }, []);

  useEffect(() => {
    let result = 0;
    data.map(item => {
      result += item.price;
    });
    setPriceSum(result);
  }, [data]);

  return (
    <section className="flex flex-col items-center">
      <p className="text-xl font-bold py-5 w-full text-center">내 장바구니</p>
      <ul className="mt-2 border-y-2 py-4">
        {data.map(item => (
          <CartCard item={item} key={item.id} />
        ))}
      </ul>
      <div className="flex w-full justify-around items-center py-8">
        <PriceBox title="상품 총액" price={priceSum} />
        <AiFillPlusCircle className="w-6 h-6" />
        <PriceBox title="배송비" price={3000} />
        <FaEquals className="w-6 h-6" />
        <PriceBox title="총가격" price={priceSum + 3000} />
      </div>
      <button className="bg-red-400 text-xl text-white w-11/12 mb-10 font-semibold p-2 ">
        주문하기
      </button>
    </section>
  );
}
