import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import data from './data'


// const card = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };



function App() {
  return (
    <div className="App">
      {data.map((item, i) => (
        <Card
        price = {item.price}
        title = {item.title}
        linkTo = {item.linkTo}
        image = {item.image}
        postedOn = {item.postedOn}
        beds = {item.beds}
        location = {item.location}
        />))
    }
    </div>
  );
}

export default App;
