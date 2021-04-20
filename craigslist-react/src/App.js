import './App.css';
import Card from './components/card'
import Posts from './assets/data'


function App() {
  return (
    <div className="App">
      {Posts.map((post, index) => (
          <div key={index}>
            <Card
              price =  {post.price}
              title =  {post.title}
              linkTo =  {post.linkTo}
              image =  {post.image}
              postedOn =  {post.postedOn}
              beds =  {post.beds}
              location =  {post.location}
            />
          </div>
      ))}

  
    </div>
  );
}

export default App;
