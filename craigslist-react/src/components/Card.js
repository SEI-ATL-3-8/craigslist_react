

function Card(props) {

    return (
      <div className="card-container">
        <p>{`$ ${props.price}`}</p>
        <div className = "image-container">
          <img className ="image" src={props.image}/>
        </div>
        <p>{props.postedOn}</p>
        <a href={props.linkTo}>{props.title}</a>
        <p>{`$ ${props.price}`}</p>
        <p>{props.beds}</p>
        <p>{` - (${props.location})`}</p>
      </div>
    );
  }

export default Card;

