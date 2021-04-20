import './App.css';
import Post from './components/post'
import data from './data'

function App() {
  return (
    <div className="container">
        {data.map((data, i) => {
          return <Post 
          key={i}
          price = {data.price}
          image = {data.image}
          date = {data.postedOn}
          link = {data.linkTo}
          title = {data.title}
          bedrooms = {data.beds}
          size = {data.sqft}
          location = {data.location}

          />
        })}
      </div>
  );
}

export default App;
