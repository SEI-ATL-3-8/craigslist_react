import React from 'react'

export default function Card(props){
    return(
      <div className='cardcontainer'>
        <div className='card'>
            <p className='price'>{props.price}</p>
            <p className='title'>{props.title}</p>
            <img className="pics" src={(`${props.image}`)}></img>
            <a href={(`${props.linkTo}`)}>{props.title}</a>
            <p className='postdate'>{props.postdate}</p>
            <p className='beds'>{props.beds}</p>
            <p className='location'>{props.location}</p>
                
            
        </div>

      </div>  
    )
}