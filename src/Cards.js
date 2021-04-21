import React from 'react'
import Card from './components/Card'

export default function Cards({ cards }) {
    return (
        cards.map( card => {
            return <Card key={card} card={card}/>
        })
    )
}
