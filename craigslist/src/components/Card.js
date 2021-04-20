import React from 'react'

const Card = (props) => {
    return (
        <div className="card-box">
            <div className="card-price">${props.cardPrice}</div>
            <a href={props.cardLink}><img className="card-image" src={props.cardImage} alt={props.cardTitle}></img></a>   
            <div className="card-footer">
                <span className="footer-date">{props.cardDate} </span>
                <a className="footer-link" href={props.cardLink}>{props.cardTitle}</a><span>  </span>
                <span className="footer-price">${props.cardPrice}</span><span>  </span>
                <span className="footer-beds">{props.cardBeds}{props.bedExists}</span>
                <span className="footer-size">{props.cardSize}{props.sizeExists}<sup>{props.sfExists}</sup></span>
                <span className="footer-location">{` - (${props.cardLocation})`} </span>
            </div>
        </div>
    )
}


export default Card