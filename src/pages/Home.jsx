import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useFirebase } from '../context/firebaseContext';

export default function Home() {
  const [data, setData] = useState([]);
  const { firebase } = useFirebase();

  useEffect(() => {
    firebase.getItems().then(d => setData(d));
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-center text-white h-72 bg-clothes bg-cover">
        <p className="text-5xl mb-3">Shop With Us</p>
        <p>Best Products, High Quality</p>
      </div>
      <div className="grid grid-cols-4 gap-3 p-4">
        {data.map(item => (
          <Card info={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
