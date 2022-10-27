import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CartItem } from '../../components';

const CartItems = ({ cart, setCart }) => {
  return (
    <>
      {Object.values(cart).map((item) => (
        <CartItem item={item} cart={cart} setCart={setCart} />
      ))}
    </>
  );
};

const EmptyCart = () => {
  return (
    <>
      <h2>Your cart is currently empty</h2>
    </>
  );
};

const Cart = () => {
  const [cart, setCart] = useState({});
  const router = useRouter();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      setCart(cart);
    }
  }, []);

  const isCartEmpty = Object.values(cart).length === 0;

  const cartTotal = Object.values(cart).reduce((accum, curr) => {
    const itemCost = parseFloat(curr.price);
    const total = curr.quantity * itemCost;
    return total + accum;
  }, 0);

  const handleEmptyCart = () => {
    setCart({});
    localStorage.setItem('cart', JSON.stringify({}));
  };

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold">Cart</h1>
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <CartItems cart={cart} setCart={setCart} />
      )}
      {!isCartEmpty && (
        <div>
          <p className="font-bold">Cart Total: ${cartTotal.toFixed(2)}</p>
          <button
            onClick={handleEmptyCart}
            className="ml-2 bg-gray-300 hover:bg-gray-600 text-white text-xs font-semibold py-2 px-4 rounded mt-2"
          >
            Empty cart
          </button>
        </div>
      )}

      <button
        onClick={() => {
          router.back();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
      >
        Go back to shopping
      </button>
    </>
  );
};

export default Cart;
