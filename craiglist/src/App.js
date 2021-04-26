import './App.css';
import Card from './componets/card';

function App() {
  return (
    <div className="App"> 
        <div className = "top">

                <Card 
                    price = "4500"
                    title = "STUNNING AND RENOVATED IN SOUTH END!"
                    linkTo= "https://imgur.com/gallery/UpzZDo"
                    image= "https://i.imgur.com/3mK8RCf.png"
                    postedOn= "Aug 2"    
                    beds = "3"
                    location= "South End"/>

                <Card 
                    price= "1625"
                    title= "Studio, Student Friendly, NO FEE"
                    linkTo= "https://imgur.com/t/mmorpg/vPfy2Te"
                    image= "https://i.imgur.com/8tSkIjv.png"
                    postedOn= "Aug 28"
                    beds= "0"
                    location= "Brighton"/>

                <Card 
                      price= "2250"
                      title= "Pet Friendly and Lovely Bay Windows"
                      linkTo= "https://imgur.com/r/Mid_Century/XBOdii5"
                      image= "https://i.imgur.com/4PrV0m1.png"
                      postedOn= "Aug 28"
                      beds= "1"
                      location= "Back Bay"/>

        </div>

        <div className = "bottom">

                  <Card 
                        price = "2800"
                        title = "Amazing 2 bed / 1 bath in Brookline!"
                        linkTo = "https://imgur.com/t/interiordesign/SIUQkId"
                        image = "https://i.imgur.com/5xCusSA.png"
                        postedOn = "Aug 28"
                        beds = "2"
                        location = "Brookline"
                        sqft = "950"/>

                  <Card 
                          price = "2550"
                          title = "2 Bd, NO FEE, Laundy in Building, New/Renovated Kitchen, Dishwasher"
                          linkTo = "https://imgur.com/r/RoomPorn/TNbgXwW"
                          image = "https://i.imgur.com/AG3AnPP.png"
                          postedOn = "Aug 28"
                          beds = "2"
                          location = "Brookline"/>

                  <Card 
                        price = "3750"
                        title = "Live On World Famous Beacon Hill Without Going Broke! Eash MBTA Access"
                        linkTo = "https://imgur.com/r/RoomPorn/tFfLW07"
                        image = "https://i.imgur.com/vrJjwU8.png"
                        postedOn = "Aug 28"
                        beds = "3"
                        location = "Beacon Hill"/>

      
        </div>
    </div>
  );
}

export default App;

/* <a
className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer">
</a> */ 