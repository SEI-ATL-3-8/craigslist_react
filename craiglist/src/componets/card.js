import React from 'react'


const Card = (props) => {
    return (
        <div className="listing">
            <img className="photo" src={props.image}></img>
           <span className="price">{props.price}</span>
           <h1 className="title">{props.title}</h1>
           <a href="https://imgur.com/gallery/UpzZDoW">{props.linkTo}</a>
           <span className="date">{props.postedOn}</span>
           <span className="amount">{props.price}</span>
           <span className="bedroom">{props.beds}</span>
           <span className="square-footage">{props.sqft}</span>
           <span className="location">{props.location}</span>
           
        </div>
    )
}

export default Card
