import logo from './logo.svg';
import Card from './components/Card';
import data from './data';

function App() {
  return (
    <div className="App">
      {data.map((item, i) => 
      (
        <Card
          key = {i}
          price = {item.price}
          title = {item.title}
          linkTo = {item.linkTo} 
          image = {item.image} 
          postedOn = {item.postedOn}
          beds = {item.beds}
          sqft = {item.sqft}
          location = {item.location}
        />
      ))}
    </div>
  );
}

export default App;
