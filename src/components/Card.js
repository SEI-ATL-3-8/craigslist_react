const Card = (props) => {
    return(
        <div>
            <img className="pics" src={(`${props.image}`)}></img>
            <br></br>
            <span className="date">{props.postedOn}</span>
            <a href={(`${props.linkTo}`)}>{props.title}</a>
            <span className="price">{props.price}</span>
            {props.bed}
            {props.location}
        </div>
    )
}

export default Card