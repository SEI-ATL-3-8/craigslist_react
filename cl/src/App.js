import './App.css';

import Card from './components/Card'

import data from './data'


//Ask how to copy the data into the src file!
function App() {
  console.log(data)


  return (
    <div className="container">
      {data.map((d, i) => {
        console.log(data)
        //<Card {...d} />
        return (
         <Card key={d.title}
            image={d.image}
            price={d.price}
            postedOn={d.postedOn}
            title={d.title}
            linkTo={d.linkTo}
            bed={d.beds}
            location={d.location}
            sqft={d.sqft}
      />
        )
      })}
    </div>
  );
}

export default App;
