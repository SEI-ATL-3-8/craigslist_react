import React from 'react'
import Card from './components/Card'

export default function Cards({ cards }) {
    return (
        cards.map((card, i) => {
            return <Card key={i} card={card} />
        })
    )
}
