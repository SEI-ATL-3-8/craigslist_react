import logo from './logo.svg';
import './App.css';
import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      <Post 
        price = "4500"
        title = "STUNNING AND RENOVATED IN SOUTH END!"
        image = "https://i.imgur.com/3mK8RCf.png"
        postedOn = "Aug 28"
        beds = "3"
        location = "South End"  
      />
      <Post 
        price = "1625"
        title = "Studio, Student Friendly, NO FEE"
        image = "https://i.imgur.com/8tSkIjv.png"
        postedOn = "Aug 28"
        beds = "0"
        location = "Brighton"  
      />
      <Post 
        price = "2250"
        title = "Pet Friendly and Lovely Bay Windows"
        image = "https://i.imgur.com/4PrV0m1.png"
        postedOn = "Aug 28"
        beds = "1"
        location = "Back Bay"  
      />
      <Post 
        price = "2800"
        title = "Amazing 2 bed / 1 bath in Brookline!"
        image = "https://i.imgur.com/5xCusSA.png"
        postedOn = "Aug 28"
        beds = "2"
        location = "Brookline"  
      />
      <Post 
        price = "2550"
        title = "2 Bd, NO FEE, Laundy in Building, New/Renovated Kitchen, Dishwasher"
        image = "https://i.imgur.com/AG3AnPP.png"
        postedOn = "Aug 28"
        beds = "2"
        location = "Brookline"  
      />
      <Post 
        price = "3750"
        title = "Live On World Famous Beacon Hill Without Going Broke! Eash MBTA Access"
        image = "https://i.imgur.com/vrJjwU8.png"
        postedOn = "Aug 28"
        beds = "3"
        location = "Beacon Hill"  
      />
    </div>
  );
}

export default App;
