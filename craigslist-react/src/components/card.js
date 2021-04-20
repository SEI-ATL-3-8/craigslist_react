import React from 'react' 

const Card = (props) => {
    return(
        <div className = 'card'>
            <img src = {props.image} alt = 'apartment'></img>
            <div className = 'info'> 
                <p className = 'item'>   
                    <span className = 'postedOn item'>{props.postedOn}</span>
                    <a className = 'title item' href = {props.linkTo}>{props.title}</a>
                    <span className = 'price item'>${props.price}</span>
                    <span className = 'beds item'>{props.beds}br - </span>
                    <span className = 'location item'>({props.location})</span>
                    <span className = 'sqft item'>{props.sqft}</span>
                </p>

            </div>  
        </div>
    )
}


export default Card