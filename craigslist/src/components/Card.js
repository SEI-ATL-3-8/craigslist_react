function Card (props)
{
    // check if post has sqft data
    if (props.sqft)
    {
        // check if post has at least one bedroom
        if (props.beds > 0)
        {
            return (
                <div className="card">
                    <span className="price price-tag">${props.price}</span>
                    <img src={props.image}></img>
                    <div className="info">
                        <h5>{props.postedOn}</h5>
                        <a href={props.linkTo}>{props.title}</a>
                        <h4 className="price">${props.price}</h4>
                        <h4>{props.beds}br - {props.sqft}ft² - ({props.location})</h4>
                    </div>
                </div>
            );
        }
        // has sqft but no beds
        return (
            <div className="card">
                <span className="price price-tag">${props.price}</span>
                <img src={props.image}></img>
                <div className="info">
                    <h5>{props.postedOn}</h5>
                    <a href={props.linkTo}>{props.title}</a>
                    <h4 className="price">${props.price}</h4>
                    <h4>{props.sqft}ft² - ({props.location})</h4>
                </div>
            </div>
        );
    }
    // has no sqft data
    // check if post has at least one bed
    if (props.beds > 0)
    {
        return (
            <div className="card">
                <span className="price price-tag">${props.price}</span>

                <img src={props.image}></img>
                <div className="info">
                    <h5>{props.postedOn}</h5>
                    <a href={props.linkTo}>{props.title}</a>
                    <h4 className="price">${props.price}</h4>
                    <h4>{props.beds}br - ({props.location})</h4>
                </div>
            </div>
        );
    }
    // has no sqft data or beds
    return (
        <div className="card">
            <span className="price price-tag">${props.price}</span>
            <img src={props.image}></img>
            <div className="info">
                <h5>{props.postedOn}</h5>
                <a href={props.linkTo}>{props.title}</a>
                <h4 className="price">${props.price}</h4>
                <h4>({props.location})</h4>
            </div>
        </div>
    );
}

export default Card;