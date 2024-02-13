import React, { Component } from 'react';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function MyBtn(){
  let count = 0;
  function handleClick() {
    count++;
    console.log(count);
  }

  return(
    <button onClick={handleClick()}>
      Clicked {count} times
    </button>

  );
}

export default function App(){
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );


  return (
    <div>
      <ul>{listItems}</ul>
      
      <div>
        <h1>{user.name}</h1>
        <img src={user.imageUrl} alt={user.name} style={{
           padding:10,borderRadius:50,
         }}/>
      </div>
      <MyBtn />
      <MyBtn />
    </div>

    
  );
}
