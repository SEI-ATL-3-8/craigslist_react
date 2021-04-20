import './App.css';
import Card from './components/Card'

import * as data from './assets/data/data'

function App() {
  return (
    <div className="App">
      {data.default.map((item, i) => {
        return <Card
          key = {i} 
          listing = {item}
        />
      })}
    </div>
  );
}

export default App;
