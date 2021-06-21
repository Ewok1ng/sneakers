import React from 'react';

import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card/Card';

const sneakers = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/sneakers/1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, img: '/img/sneakers/2.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 13999, img: '/img/sneakers/3.jpg' },
  {
    title: 'Мужские Кроссовки Puma X Aka Boku Future Rider',
    price: 12600,
    img: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Cart />

      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {sneakers.map((item, idx) => (
            <Card
              key={idx}
              title={item.title}
              price={item.price}
              img={item.img}
              onClickButton={(item) => {
                console.log(item);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
