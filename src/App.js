import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card/Card';

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [cartSneakers, setCartSneakers] = React.useState([]);
  const [isCartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://60d4643061160900173cb128.mockapi.io/items').then((response) => {
      setSneakers(response.data);
      setCartSneakers(response.data.filter((item) => item.isAddedToCart === true));
    });
  }, []);

  const onOpenCart = () => {
    setCartOpened(true);
  };

  const onCloseCart = () => {
    setCartOpened(false);
  };

  const addToCart = (id) => {
    const obj = sneakers.filter((item) => item.id === id)[0];

    if (obj.isAddedToCart) return;

    obj.isAddedToCart = true;
    setCartSneakers((prev) => [...prev, obj]);
    setSneakers((prev) => [...prev, obj]);
    axios.put(`https://60d4643061160900173cb128.mockapi.io/items/${id}`, obj);
  };

  const removeFromCart = (id) => {
    const newCartSneakers = cartSneakers.filter((item) => item.id !== id);
    const newSneakers = JSON.parse(JSON.stringify(sneakers));
    newSneakers.forEach((element) => {
      if (element.id === id) {
        element.isAddedToCart = false;
        axios.put(`https://60d4643061160900173cb128.mockapi.io/items/${id}`, element);
      }
    });

    setCartSneakers(newCartSneakers);
    setSneakers(newSneakers);
  };

  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened ? (
        <Cart
          removeFromCart={removeFromCart}
          onCloseCart={onCloseCart}
          cartSneakers={cartSneakers}
        />
      ) : null}
      <Header onOpenCart={onOpenCart} />
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
                isAddedToCart={item.isAddedToCart}
                addToCart={addToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
