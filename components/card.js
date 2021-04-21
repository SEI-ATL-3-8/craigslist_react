const Card = (props) => {
    return (
        <div className="mainCard">
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default Card