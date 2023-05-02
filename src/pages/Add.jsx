import React, { useState } from 'react';
import { addItem } from '../api/firebase';
import Button from '../components/ui/Button';
import { uploadimage } from '../api/uploader';

export default function Add() {
  const [file, setFile] = useState('');
  const [product, setProduct] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct(product => ({ ...product, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsUploading(true);
    uploadimage(file) //
      .then(url => {
        console.log(url);
        addItem(product, url) //
          .then(() => {
            setSuccess('성공적으로 제품이 추가되었습니다.');
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .then(() => {
        setProduct([]);
        setFile('');
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold my-3">새로운 제품 등록</h2>
      {success && <p className="my-2">✅{success}</p>}
      {file && (
        <img
          src={window.URL.createObjectURL(file)}
          alt="local file"
          className="w-2/5"
        />
      )}
      <form
        className="flex flex-col w-full items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          value={product.name ?? ''}
          onChange={handleChange}
          placeholder="제품명"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ''}
          onChange={handleChange}
          placeholder="가격"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          onChange={handleChange}
          placeholder="카테고리"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ''}
          onChange={handleChange}
          placeholder="제품 설명"
          required
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ''}
          onChange={handleChange}
          placeholder="옵션들(콤마(,)로 구분)"
          required
        />
        <Button
          text={isUploading ? '업로드중...' : '제품 등록하기'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
