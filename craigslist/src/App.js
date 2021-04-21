import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import data from './data'

function App() {
  return (
    <div className="App">
      {data.map((item, i) => (
        <Card
          price={item.price}
          title={item.title}
          link={item.linkTo}
          image={item.image}
          postedOn={item.postedOn}
          beds={item.beds}
          location={item.location}

        />
      ))}
    </div>
  );
}

export default App;
