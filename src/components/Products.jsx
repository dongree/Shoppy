import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getItems } from '../api/firebase';
import Card from './Card';

export default function Products() {
  const { isLoading, error, data: products } = useQuery([], getItems);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
        {products && products.map(item => <Card info={item} key={item.id} />)}
      </ul>
    </div>
  );
}
