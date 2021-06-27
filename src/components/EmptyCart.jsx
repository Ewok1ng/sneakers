import React from 'react';

const EmptyCart = ({ onCloseCart }) => {
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" height={120} width={120} src="/img/empty-cart.jpg" alt="Empty cart" />
      <h2>Корзина пустая</h2>
      <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
      <button onClick={onCloseCart} className="greenBtn greenBtn--left">
        <img src="/img/arrow-left.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default EmptyCart;
