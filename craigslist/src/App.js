import './App.css';
import data from './assets/data'
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      {console.log(data)}
      {data.map((item, i) => (
        <Card 
            key = {i}
            cardPrice = {item.price}
            cardImage = {item.image}
            cardLink = {item.linkTo}
            cardDate = {item.postedOn}
            cardTitle = {item.title}
            cardBeds = {item.beds !== 0 ? item.beds : ''}
            bedExists = {item.beds !== 0 ? 'br ' : ''}
            cardSize = {item.sqft > 0 ? ` - ${item.sqft}` : ''}
            sizeExists = {item.sqft > 0 ? 'sf' : ''}
            sfExists = {item.sqft > 0 ? '2' : ''}
            cardLocation = {item.location}
        />
      ))}
    </div>
  )
}

export default App;
