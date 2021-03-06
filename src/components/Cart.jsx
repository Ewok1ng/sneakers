import React from 'react';

import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

const Cart = ({ total, cartSneakers, onCloseCart, removeFromCart }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
            onClick={onCloseCart}
          />
        </h2>
        {cartSneakers.length > 0 ? (
          <>
            <div className="items">
              {cartSneakers.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
            <ul className="cartTotalBlock">
              <li className="d-flex justify-between">
                <span>Итого: </span>
                <div></div>
                <b>{new Intl.NumberFormat('ru-RU').format(total)} руб.</b>
              </li>
              <li className="d-flex justify-between">
                <span>Налог 5%: </span>
                <div></div>
                <b>{new Intl.NumberFormat('ru-RU').format(Math.round(total * 5) / 100)} руб.</b>
              </li>
            </ul>
            <button className="greenBtn greenBtn--right">
              Оформить заказ <img src="/img/arrow-right.svg" alt="arrow" />
            </button>
          </>
        ) : (
          <EmptyCart onCloseCart={onCloseCart} />
        )}
      </div>
    </div>
  );
};

export default Cart;
