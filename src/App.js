import './App.css';
import Card from './components/Card'
import data from './data'


function App() {

  return (
    <>
    <div class='App'>
      {data.map((item, i) => (
         <Card key = {i}
          price =  {post.price}
          title =  {post.title}
          linkTo =  {post.linkTo}
          image =  {post.image}
          postedOn =  {post.postedOn}
          beds =  {post.beds}
          location =  {post.location}
         />

      ))}
    </div>
    </>
  );
}

export default App;
