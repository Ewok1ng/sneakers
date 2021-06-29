import React from 'react';

import Card from '../components/Card/Card';

const Home = ({
  sneakers,
  searchValue,
  setSearchValue,
  onFavourite,
  addToCart,
  onChangeInputValue,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue ? (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="clear"
            />
          ) : null}
          <input
            onChange={onChangeInputValue}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {sneakers
          .filter((product) => product?.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, idx) => (
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

export default Home;
