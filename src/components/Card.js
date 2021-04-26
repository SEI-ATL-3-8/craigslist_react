import React from 'react'

export default function Card({ card }) {
    return (
        <div class = "card">
            <div class="price">${card.price}</div>
            <img src={card.image}/>
            <div class="details">
                <div class="date">{card.postedOn}</div>
                <a href={card.linkTo}>{card.title}</a>
                <div class="location">{card.location}</div>
            </div>
            
        </div>
    ) 
}
