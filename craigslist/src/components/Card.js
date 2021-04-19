import React from 'react'

const Card = (props) => {
    return (
        <div className="card-box">
            <div className="card-price">{props.cardPrice}</div>
            <img className="card-image" src={require(props.cardImage).default}>
                <a className="card-link" src={require(props.cardLink)}></a>
            </img>
            <div className="card-footer">
                <span className="footer-date">{props.cardDate}</span>
                <a className="footer-link" href={require(props.cardLink).default}>{props.cardTitle}</a>
                <span className="footer-price">{props.cardPrice}</span>
                <span className="footer-beds">{props.cardBeds}</span>
                <span className="footer-size">{props.cardSize}</span>
                <span className="footer-location">{props.cardLocation}</span>
            </div>

        </div>
    )
}






export default Card