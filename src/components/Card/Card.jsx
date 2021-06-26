import React from 'react';
import styles from './Card.module.scss';

const Card = ({ id, title, price, img, isFavourite, isAddedToCart, onFavourite, addToCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onFavourite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={img} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          src={!isAddedToCart ? '/img/btn-plus.svg' : '/img/btn-checked.svg'}
          alt="Add to cart"
          onClick={() => {
            addToCart(id);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
