const Listing = (props) => {
    return (
        <div className="listing-container">
            <p className="price-top">${props.price}</p>
            <div className="image">
                <img className="picture" src={props.picture} alt='poop'/>
            </div>
            <div className="bottom">
                <span className="date">{props.date}</span>
                <a href={props.link} className="title">{props.title}</a>
                <span className="price-bottom">${props.price}</span>
                {props.bedrooms !== 0 ? `${props.bedrooms}br - ` : null}
                {props.size ? `${props.size}sqft - ` : null}
                <span className="location">{props.location}</span>
            </div>
        </div>
    )
}
export default Listing