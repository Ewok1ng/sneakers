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
    });
  }, []);

  const onOpenCart = () => {
    setCartOpened(true);
  };

  const onCloseCart = () => {
    setCartOpened(false);
  };

  const addToCart = (title, price, img, isAdded) => {
    if (isAdded) {
      const obj = { title, price, img };
      setCartSneakers((prev) => [...prev, obj]);
    }
    if (!isAdded) {
      const arr = cartSneakers;

      arr.forEach((item, idx) => {
        if (item.title === title && item.price === price && item.img === img) {
          arr.splice(idx, 1);
        }
      });
      setCartSneakers([...arr]);
    }
  };

  const removeFromCart = (title, price, img) => {
    const arr = cartSneakers;
    arr.forEach((item, idx) => {
      if (item.title === title && item.price === price && item.img === img) {
        arr.splice(idx, 1);
      }
    });
    setCartSneakers([...arr]);
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
            .filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, idx) => (
              <Card
                key={`${idx}_${item.title}`}
                title={item.title}
                price={item.price}
                img={item.img}
                addToCart={addToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
