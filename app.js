import './App.css';
import Card from './components/card'


function App() {
  return (
    <div className="App">
      <div className="allCards">
        <Card 
        name = "STUNNING AND RENOVATED IN SOUTH END!"
        price = "4500"
        image = "https://i.imgur.com/3mK8RCf.png"/>
        <Card 
        name = "Studio, Student Friendly, NO FEE"
        price = "1625"
        image = "https://i.imgur.com/8tSkIjv.png"/>
        <Card 
        name = "Pet Friendly and Lovely Bay Windows"
        price = "2250"
        image = "https://i.imgur.com/4PrV0m1.png"/>
        <Card 
        name = "Amazing 2 bed / 1 bath in Brookline!"
        price = "2800"
        image = "https://i.imgur.com/5xCusSA.png"/>
        <Card 
        name = "2 Bd, NO FEE, Laundy in Building, New/Renovated Kitchen, Dishwasher"
        price = "2550"
        image = "https://i.imgur.com/AG3AnPP.png"/>
        <Card 
        name = "Live On World Famous Beacon Hill Without Going Broke! Eash MBTA Access"
        price = "3750"
        image = "https://i.imgur.com/vrJjwU8.png"/>
      </div>
    </div>
  );
}

export default App;