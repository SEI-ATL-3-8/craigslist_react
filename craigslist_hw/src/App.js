import './App.css';
import Post from './components/post'

function App() {
  return (
    <div className="container">
        <Post 
        price = "$4500"
        date = "Aug 28"
        image = "3mK8RCf.png"
        link = "https://imgur.com/gallery/UpzZDoW"
        title = "STUNNING AND RENOVATED IN SOUTH END!"
        info = "3 br - (South End)" />
        <Post 
        price = "$1625"
        date = "Aug 28"
        image = "8tSkIjv.png"
        link = "https://imgur.com/t/mmorpg/vPfy2Te"
        title = "Studio, Student Friendly, NO FEE"
        info = "(Brighton)" />
        <Post 
        price = "$2250"
        date = "Aug 28"
        image = "4PrV0m1.png"
        link = "https://imgur.com/r/Mid_Century/XBOdii5"
        title = "Pet Friendly and Lovely Bay Windows"
        info = "1 br - (Back Bay)" />
        <Post 
        price = "$2800"
        date = "Aug 28"
        image = "5xCusSA.png"
        link = "https://imgur.com/t/interiordesign/SIUQkId"
        title = "Amazing 2 bed / 1 bath in Brookline!"
        info = "2 br - (Brookline)" />
        <Post 
        price = "$2550"
        date = "Aug 28"
        image = "AG3AnPP.png"
        link = "https://imgur.com/r/RoomPorn/TNbgXwW"
        title = "2 Bd, NO FEE, Laundy in Building, New/Renovated Kitchen, Dishwasher"
        info = "2 br - (Brookline)" />
        <Post 
        price = "$3750"
        date = "Aug 28"
        image = "vrJjwU8.png"
        link = "https://imgur.com/r/RoomPorn/tFfLW07"
        title = "Pet Friendly and Lovely Bay Windows"
        info = "3 br - (Beacon Hill)" />
      </div>
  );
}

export default App;
