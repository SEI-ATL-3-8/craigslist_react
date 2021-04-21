import './App.css';
import Cards from './components/cards'
import data from './data/data'
console.log(data);
function App() {
  return (
    <div className = 'listingContainer'>
      {data.map((listing, index) => {
        return <Cards 
          key = {index}
          listing = {listing} 
        />
      })}
    </div>
  );
}

export default App;
