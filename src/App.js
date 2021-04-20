import Card from './Cards';
import './App.css';
import React, { useState } from 'react';
import data from './data.js'

function App() {
  return (
    <>
      <div class='cards_container'>
        <Card cards={data} />
      </div>
    </>
  );
}

export default App;
