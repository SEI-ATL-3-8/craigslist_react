const Card = (props) => {
    return (
        <div className = 'card'>
         <img src = {props.image} alt = 'apartment'></img>

         <div className = 'info'>
                    <span className = 'postedOn item'>{props.postedOn}</span>
                    <a className = 'title' href = {props.linkTo}>{props.title}</a>
                    <span className = 'price'>${props.price}</span>
                    <span className = 'beds'>{props.beds}br - </span>
                    <span className = 'sqft'>{props.sqft}</span>
                    <span className = 'location'>({props.location})</span>


         </div>

        </div>
    )
}

export default Card;
