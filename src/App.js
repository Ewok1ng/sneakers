import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card/Card';

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [cartSneakers, setCartSneakers] = React.useState([]);
  const [isCartOpened, setCartOpened] = React.useState(false);

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
  };

  return (
    <div className="wrapper clear">
      {isCartOpened ? <Cart onCloseCart={onCloseCart} cartSneakers={cartSneakers} /> : null}
      <Header onOpenCart={onOpenCart} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {sneakers.map((item, idx) => (
            <Card
              key={idx}
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
