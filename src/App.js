import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Orders from './pages/Orders';

import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [cartSneakers, setCartSneakers] = React.useState([]);
  const [favourite, setFavourite] = React.useState([]);
  const [isCartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    axios.get('https://60d4643061160900173cb128.mockapi.io/items').then((response) => {
      setSneakers(response.data);
      setCartSneakers(response.data.filter((item) => item.isAddedToCart === true));
      setFavourite(response.data.filter((item) => item.isFavourite === true));
    });
  }, []);

  React.useEffect(() => {
    let sum = 0;
    cartSneakers.forEach((item) => {
      sum = sum + item.price;
    });
    setTotal(sum);
  }, [cartSneakers]);

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
    setSneakers((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      const newArray = JSON.parse(JSON.stringify(prev));
      newArray[index] = obj;
      return newArray;
    });
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

  const onFavourite = (id) => {
    const obj = sneakers.filter((item) => item.id === id)[0];
    if (!obj.isFavourite) {
      obj.isFavourite = true;
      setFavourite((prev) => [...prev, obj]);
      setSneakers((prev) => {
        const index = prev.findIndex((item) => item.id === id);
        return [...prev, (prev[index] = { ...prev[index], isFavourite: true })];
        // const newArray = JSON.parse(JSON.stringify(prev));
        // newArray[index] = obj;
        // return newArray;
      });
      axios.put(`https://60d4643061160900173cb128.mockapi.io/items/${id}`, obj);
    } else {
      const newFavourite = cartSneakers.filter((item) => item.id !== id);
      const newSneakers = JSON.parse(JSON.stringify(sneakers));
      newSneakers.forEach((element) => {
        if (element.id === id) {
          element.isFavourite = false;
          axios.put(`https://60d4643061160900173cb128.mockapi.io/items/${id}`, element);
        }
      });

      setFavourite(newFavourite);
      setSneakers(newSneakers);
    }
  };

  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened ? (
        <Cart
          total={total}
          removeFromCart={removeFromCart}
          onCloseCart={onCloseCart}
          cartSneakers={cartSneakers}
        />
      ) : null}
      <Header total={total} onOpenCart={onOpenCart} />
      <Route exact path="/">
        <Home
          sneakers={sneakers}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onFavourite={onFavourite}
          addToCart={addToCart}
          onChangeInputValue={onChangeInputValue}
        />
      </Route>
      <Route path="/favourite">
        <Favourite favourite={favourite} onFavourite={onFavourite} addToCart={addToCart} />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
    </div>
  );
}

export default App;
