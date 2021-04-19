function Card (props)
{
    return (
        <div className="card">
            <span className="price price-tag">${props.price}</span>
            <img src={props.image}></img>
            <div className="info">
                <h5>{props.postedOn}</h5>
                <a href={props.linkTo}>{props.title}</a>
                <h4 className="price">${props.price}</h4>
                <h4>{props.beds > 0 ? `${props.beds}br - ` : ''} {props.sqft ? `${props.sqft}ft² -` : ''} ({props.location})</h4>
            </div>
        </div>
    );
}

export default Card;