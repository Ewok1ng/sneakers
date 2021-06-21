import React from 'react';

const CartItem = () => {
  return (
    <div className="cartItem d-flex align-center justify-between p-20 mb-20 mr-10">
      <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
      <div className="mr-10">
        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
        <b>12 999 руб.</b>
      </div>
      <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
    </div>
  );
};

export default CartItem;
