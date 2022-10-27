import React, { useEffect } from 'react';
import Link from 'next/link';

const CartItem = ({ item, cart, setCart }) => {
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (item) => {
    const cartCopy = Object.assign({}, cart);
    const itemToRemove = cartCopy[item.id];
    if (itemToRemove) {
      if (itemToRemove.quantity === 1) {
        delete cartCopy[item.id];
      } else {
        itemToRemove.quantity--;
      }
    }
    setCart(cartCopy);
  };

  return (
    <div className="mt-4 mb-4 p-4">
      <div className="text-xl font-bold">{item.name}</div>
      <div>
        <img src={item.imageUrl} width="60px" height="60px" />
      </div>
      <div className="text-lg">${item.price}</div>
      <div>Qty {item.quantity}</div>
      <button
        className="bg-gray-400 hover:bg-gray-600 text-white text-xs font-semibold py-2 px-4 rounded mt-2"
        onClick={() => handleRemove(item)}
      >
        Remove item
      </button>
    </div>
  );
};

export default CartItem;
