function Card({listing}) {
    return (
        <div className="card">
            <span className="price" id="absolutePrice">${listing.price}</span>
            <div className="imgDiv">
                <img src={listing.image} alt="Listing"/>
            </div>
            <div className="info">
                <span className="dateListed">{listing.postedOn} </span>
                <a className="title" href={listing.linkTo} target="_blank" rel="noreferrer">{listing.title}</a>
                <span className="price">${listing.price}</span>
                {listing.beds > 0 ? <span className="beds">{listing.beds}br - </span> : ''}
                {listing.sqft ? <span className="sqft">{listing.sqft}ft<sup>2</sup> - </span> : ''}
                <span className="location">({listing.location})</span>
            </div>
        </div>
    )
}

export default Card