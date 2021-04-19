const Card = props => {
    return (
        <div className='card'>
            <img src={props.image}></img>
            <p>Price: {props.price}</p>
            <a href={props.link} target='blank'>{props.title}</a>
            <p>Posted On: {props.postedOn}</p>
            <p>beds: {props.beds}</p>
            <p>Location: {props.location}</p>
        </div>
    )
}

export default Card