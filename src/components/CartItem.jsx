import React from 'react';

const CartItem = ({ id, title, price, img, removeFromCart }) => {
  return (
    <div className="cartItem d-flex align-center justify-between p-20 mb-20 mr-10">
      <img className="mr-20" width={70} height={70} src={img} alt="sneakers" />
      <div className="mr-10">
        <p className="mb-5">{title}</p>
        <b>{price} руб.</b>
      </div>
      <img
        className="removeBtn"
        src="/img/btn-remove.svg"
        alt="remove"
        onClick={() => removeFromCart(id)}
      />
    </div>
  );
};

export default CartItem;
