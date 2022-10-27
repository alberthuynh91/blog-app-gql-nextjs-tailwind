import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const items = [
    {
      id: 0,
      name: 'Avocado',
      price: '1.99',
      imageUrl: 'images/avocado.jpeg',
    },
    {
      id: 1,
      name: 'Bananas',
      price: '3.99',
      imageUrl: 'images/bananas.jpeg',
    },
    {
      id: 2,
      name: 'Chicken',
      price: '10.99',
      imageUrl: 'images/chicken-breast.jpeg',
    },
  ];
  return (
    <Layout>
      <Component {...pageProps} items={items} />
    </Layout>
  );
}

export default MyApp;
