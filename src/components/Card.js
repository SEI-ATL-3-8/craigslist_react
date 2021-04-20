import React from 'react'

export default function Card({ card }) {
    return (
        <div class="card">
            <div class="price">${card.price}</div>
            <img src={card.image} />
            <div class="details">
                <div class="date">{card.postedOn}</div>
                <a href={card.linkTo}>{card.title}</a>
                <div class="location">
                    {card.location} {card.beds === 0 ? '' : card.beds + 'beds'}
                    {card.sqft ? '-' + card.sqft + 'ft2' : ''}

                </div>
            </div>

        </div>
    )
}
