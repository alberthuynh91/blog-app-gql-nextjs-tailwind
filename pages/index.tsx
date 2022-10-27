import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Item } from '../components';
import Link from 'next/link';

const Home: NextPage = ({ items }) => {
  const initialCart =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart'))
      : {};

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>React Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-4 text-4xl font-extrabold">Bert's Grocery Store</h1>
      <div className="flex">
        {items.map((item) => {
          return <Item item={item} cart={cart} setCart={setCart} />;
        })}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        <Link href={`/cart`}>View cart</Link>
      </button>
    </div>
  );
};

export default Home;
