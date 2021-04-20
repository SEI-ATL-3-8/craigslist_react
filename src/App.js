import Card from './Cards';
import './App.css';
import React, { useState } from 'react';
import data from'./data.js'

function App() {
  const [cards, setCards] = useState(data);
  return (
    <>
    <div class='cards_container'>
    <Card cards={cards}/>
    </div>
    </>
  );
}

export default App;
