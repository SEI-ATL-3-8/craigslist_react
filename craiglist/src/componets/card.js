const Card = (props) =>{

    return(
        <div className = "cardContainer">
                <a className = "price">{props.price}</a>
                <img src = {props.image}/>
                <div className = "bottomSec">
                <a className = "posted">{props.postedOn}</a>
                <a className = "link" href={props.linkTo}>{props.title}</a>
                <a className = "price">{props.price}</a>
                <a>{props.beds}</a>
                <a>{props.location}</a>
                </div>
        </div>

    )
}

export default Card