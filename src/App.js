import './App.css';
import data from './data';
import Card from './components/Card/Card';

function App() {
  
  return (
    <div className="container"> 
        <div className="wrap">
          {
            data.map((d,i) => (
              <div key={i} className="box">
                <Card {...d} />
              </div>
            ))
          }



        </div>
    </div>
  );
}

export default App;
