import './App.css';
import data from './assets/data'
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      {data.map((thing, i) => (
        <Card 
            key = {i}



            
        />
      ))}
      
    </div>
  );
}

export default App;
