import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ total, onOpenCart }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" alt="react sneakers" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onOpenCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>{new Intl.NumberFormat('ru-RU').format(total)} руб.</span>
        </li>
        <li className="cu-p mr-10">
          <Link to="favourite">
            <img width={18} height={18} src="/img/favourite.svg" alt="favourite" />
          </Link>
        </li>
        <li className="cu-p">
          <Link to="orders">
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
