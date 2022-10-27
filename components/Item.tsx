import React from 'react';

const Item = ({ item, cart, setCart }) => {
  const handleAddToCart = () => {
    const tempCart = Object.assign({}, cart);
    if (tempCart[item.id]) {
      tempCart[item.id].quantity++;
      setCart(tempCart);
    } else {
      tempCart[item.id] = {
        ...item,
        quantity: 1,
      };
      setCart(tempCart);
    }
  };

  return (
    <div className="mt-4 mb-4 p-4">
      <div className="text-xl font-bold">{item.name}</div>
      <div>
        <img src={item.imageUrl} width="60px" height="60px" />
      </div>
      <div className="text-lg">${item.price}</div>
      <button
        className="bg-gray-400 hover:bg-gray-600 text-white text-xs font-semibold py-2 px-4 rounded mt-2"
        onClick={() => handleAddToCart(item)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
