const Cards = ({listing}) => {
    return (
        // {props.data.map((listing, index) => (
        <div className = 'listing'>
            {/* key = {index} */}
            <p className = 'price' >${listing.price}</p>
            <div className = 'imageSection' >
                <img src = {`${listing.image}`} alt='listing' ></img>
            </div>
            <div className = 'infoSection' >
                <p className = 'postedOn'>{listing.postedOn}</p>
                <a href = {`${listing.linkTo}`} >{listing.title}</a>
                <p className = 'price2'>${listing.price}</p>
                {listing.beds ? <p className = 'beds'>{listing.beds}br</p> : ''}
                {listing.sqft ? <p className = 'sqft'>{listing.sqft}ft <sup>2</sup></p> : ''}
                <p className = 'location'>({listing.location})</p>
            </div>
        </div>
        // ))}
    )
}

export default Cards