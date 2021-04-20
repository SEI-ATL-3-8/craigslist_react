import './App.css';
import Listing from './components/Listing'
import data from './data'

console.log(data)

function App() {
  return (
    <div className="container">
      {data.map((data, i) => {
        console.log(data.price)
        return <Listing
          key={i}
          price={data.price}
          picture={data.image}
          date={data.postedOn}
          link={data.linkTo}
          title={data.title}
          bedrooms={data.beds}
          size={data.sqft}
          location={data.location}
        />
      })}
    </div>
  );
}

export default App;
