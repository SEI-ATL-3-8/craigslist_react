import './App.css';
import Card from './Components/Card'


function App() {
  return (
    <div className="container">
       <Card
            image="https://i.imgur.com/3mK8RCf.png"
            price="4500"
            title="Stunning and Renovated In South End!"
            linkTo="https://imgur.com/gallery/UpzZDoW"
            postedOn="Aug 28"
            beds="3br"
            location="South End"
            />
        <Card
          image="https://i.imgur.com/8tSkIjv.png"
          price="1625"
          title="Studio, Student Friendly, NO FEE"
          linkTo="https://imgur.com/t/mmorpg/vPfy2Te"
          postedOn="Aug 28"
          location="Brighton"
        />
        <Card
        image="https://i.imgur.com/4PrV0m1.png"
        price="2250"
        title="Pet Friendly and Lovely Bay Windows"
        linkTo="ttps://imgur.com/r/Mid_Century/XBOdii5"
        postedOn="Aug 28"
        beds="1br"
        location="Back Bay"
        />
        <Card
        image="https://i.imgur.com/4PrV0m1.png"
        price="2800"
        title="Amazing 2 bed / 1 bath in Brookline"
        linkTo="https://imgur.com/t/interiordesign/SIUQkId" 
        postedOn="Aug 28"
        beds="2br"
        sqft= "950sqft"
        location="Brookline"
        />
        <Card
        image="https://i.imgur.com/AG3AnPP.png"
        price="2550"
        title="2 Bd, NO FEE, Laundry in Building, NEW/Renovated Kithchen, Dishwasher"
        linkTo="https://imgur.com/r/RoomPorn/TNbgXwW"
        postedOn="Aug 28"
        beds="2br"
        location="Brookline"
        />
        <Card 
        image="https://i.imgur.com/vrJjwU8.png"
        price="3750"
        title="Live On World Famous Beacon HIll Without Going Broke! Easy MBTA Access"
        linkTo="https://imgur.com/r/RoomPorn/tFfLW07"
        postedOn="Aug 28"
        beds="3br"
        location="Beacon Hill"
        />
    </div>
  );
}

export default App;
