import React from 'react';

import Card from '../components/Card/Card';

const Favourite = ({ favourite, onFavourite, addToCart }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favourite.map((item, idx) => (
          <Card
            key={`${idx}_${item.title}`}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            isFavourite={item.isFavourite}
            onFavourite={onFavourite}
            isAddedToCart={item.isAddedToCart}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
