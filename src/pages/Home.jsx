import React from 'react';
import Card from '../components/Card';

export default function Home() {
  const data = [
    {
      id: 1,
      type: '여성',
      name: 'GOLD COTTON TWEED 드레스',
      description:
        '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
      price: 12000,
      img: '/img/1.webp',
    },
    {
      id: 2,
      type: '여성',
      name: 'GOLD COTTON TWEED 드레스',
      description:
        '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
      price: 12000,
      img: '/img/2.webp',
    },
    {
      id: 3,
      type: '여성',
      name: 'GOLD COTTON TWEED 드레스',
      description:
        '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
      price: 12000,
      img: '/img/3.webp',
    },
    {
      id: 4,
      type: '여성',
      name: 'GOLD COTTON TWEED 드레스',
      description:
        '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
      price: 12000,
      img: '/img/4.webp',
    },
    {
      id: 5,
      type: '여성',
      name: 'GOLD COTTON TWEED 드레스',
      description:
        '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
      price: 12000,
      img: '/img/5.webp',
    },
    {
      id: 6,
      type: '여성',
      name: 'GOLD COTTON TWEED 드레스',
      description:
        '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
      price: 12000,
      img: '/img/6.webp',
    },
    {
      id: 7,
      type: '여성',
      name: 'GOLD COTTON TWEED 드레스',
      description:
        '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
      price: 12000,
      img: '/img/7.webp',
    },
    {
      id: 8,
      type: '여성',
      name: 'GOLD COTTON TWEED 드레스',
      description:
        '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
      price: 12000,
      img: '/img/1.webp',
    },
  ];

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
