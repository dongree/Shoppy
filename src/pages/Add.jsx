import React, { useState } from 'react';
import uuid from 'react-uuid';
import { addItem } from '../api/firebase';

export default function Add() {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState('');

  const init = () => {
    setFile('');
    setFileName('');
    setName('');
    setPrice('');
    setCategory('');
    setDescription('');
    setOptions('');
  };

  const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'igh0wg24');

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        const json = JSON.parse(data);
        addItem(
          uuid(),
          json.secure_url,
          name,
          price,
          category,
          description,
          options
        );
      });

    init();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-semibold my-3">새로운 제품 등록</div>
      <form
        action=""
        className="flex flex-col w-full items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          value={fileName}
          onChange={e => {
            setFile(e.target.files[0]);
            setFileName(e.target.value);
          }}
          className="border-2 w-4/5  p-3 mb-1"
          required
        />
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="제품명"
          className="border-2 w-4/5  p-3 mb-1"
          required
        />
        <input
          type="number"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          placeholder="가격"
          className="border-2 w-4/5  p-3 mb-1"
          required
        />
        <input
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="카테고리"
          className="border-2 w-4/5  p-3 mb-1"
          required
        />
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="제품 설명"
          className="border-2 w-4/5  p-3 mb-1"
          required
        />
        <input
          type="text"
          value={options}
          onChange={e => setOptions(e.target.value)}
          placeholder="옵션들(콤마(,)로 구분)"
          className="border-2 w-4/5  p-3 mb-1"
        />
        <button className="bg-red-400 w-9/12 text-xl text-white font-semibold my-4 p-1 ">
          제품 등록하기
        </button>
      </form>
    </div>
  );
}
