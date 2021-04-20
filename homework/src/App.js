import './App.css';
import Card from './components/Card'
import data from './data'

function App() {
  return (
    <div className ='cardContainer'>
      <Card 
      title = "STUNNING AND RENOVATED IN SOUTH END!"
      linkTo = "https://imgur.com/gallery/UpzZDoW"
      image = "https://i.imgur.com/3mK8RCf.png"
      postedOn = "Aug 28"
      price = "$4500"
      bed =  " 3br - "
      location = "(South End)"/>

      <Card 
    title = "Pet Friendly and Lovely Bay Windows"
    linkTo = "https://imgur.com/r/Mid_Century/XBOdii5"
    image = "https://i.imgur.com/4PrV0m1.png"
    postedOn = "Aug 28"
    price = "$2250"
    bed =  " 1br - "
    location = "(Back Bay)"
    /> 

    <Card 
    title = "Pet Friendly and Lovely Bay Windows"
    linkTo = "https://imgur.com/r/Mid_Century/XBOdii5"
    image = "https://i.imgur.com/4PrV0m1.png"
    postedOn = "Aug 28"
    price = "$2250"
    bed =  " 1br - "
    location = "(Back Bay)"
    /> 

  <Card 
    title = "Pet Friendly and Lovely Bay Windows"
    linkTo = "https://imgur.com/r/Mid_Century/XBOdii5"
    image = "https://i.imgur.com/4PrV0m1.png"
    postedOn = "Aug 28"
    price = "$2250"
    bed =  " 1br - "
    location = "(Back Bay)"
    /> 

    <Card 
    title = "Amazing 2 bed / 1 bath in Brookline!"
    linkTo = "https://imgur.com/t/interiordesign/SIUQkId"
    image = "https://i.imgur.com/5xCusSA.png"
    postedOn = "Aug 28"
    price = "$2800"
    bed =  " 3br - 950 ft"
    location = "(Brookline)"
    /> 

    <Card 
    title = "2 Bd, NO FEE, Laundy in Building, New/Renovated Kitchen, Dishwasher"
    linkTo = "https://imgur.com/r/RoomPorn/TNbgXwW"
    image = "https://i.imgur.com/AG3AnPP.png"
    postedOn = "Aug 28"
    price = "$2250"
    bed =  " 2br - "
    location = "(Brookline)"
    /> 
     
    <Card 
    title = "Live On World Famous Beacon Hill Without Going Broke! Eash MBTA Access"
    linkTo =  "https://imgur.com/r/RoomPorn/tFfLW07"
    image = "https://i.imgur.com/vrJjwU8.png"
    postedOn = "Aug 28"
    price = "$3750"
    bed =  " 3br - "
    location = "(Brookline)"
    /> 
    </div>
  );
}

export default App;
