const Card = ({price, title, linkTo, image, postedOn, beds, location, sqft}) => (
    <div className="card">
      
        <div className="card-image">
            <div className="price-block">${price}</div>
            <img src={image} alt={title} />
        </div>

        <div className="card-bottom">
            <span id="date">{postedOn} </span><a href={linkTo}>{title}</a>
            <p><span id="price-stamp">${price} </span> 
                {beds > 0 && `${beds}br -`}
                {sqft && <span>{sqft}ft&#178; - </span> }
                {`(${location})`}
            </p>
        </div>
    </div>
);


export default Card;