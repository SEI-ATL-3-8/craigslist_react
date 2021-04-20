import './App.css';

import Card from './components/Card'

import data from './data'

function App() {
  return (
    <div className="container">
      {data.map((d, i) => {
        return (
          <Card {...d} key={d.id} />
          // <Card 
          //   image={d.image}
          //   price={d.price}
          //   postedOn={d.postedOn}
          //   title={d.title}
          //   linkTo={d.linkTo}
          //   beds={d.beds}
          //   location={d.location}
          //   sqft={d.sqft}
          // />
        )
      })}
    </div>
  );
}

export default App;
