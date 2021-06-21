import React from 'react';

import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className="overlay" style={{ display: 'none' }}>
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" />
        </h2>
        <div className="items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <ul className="cartTotalBlock">
          <li className="d-flex justify-between">
            <span>Итого: </span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
          <li className="d-flex justify-between">
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenBtn greenBtn--right">
          Оформить заказ <img src="/img/arrow-right.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
