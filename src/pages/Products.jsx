import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getItems } from '../api/firebase';

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItems().then(d => setData(d));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3 p-4">
      {data.map(item => (
        <Card info={item} key={item.id} />
      ))}
    </div>
  );
}
