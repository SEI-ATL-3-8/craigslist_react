import './App.css';

import Card from './components/Card'

const Card = (props) => {
    return (
        <div className="card">

            <div className="price-box">
                ${props.price}
            </div>

            <div className="image-container">
                <img src={props.image}/>
            </div>

            <span className="posted-on">
                {props.postedOn}
            </span>

            <a href={props.linkTo}>{props.title}</a>

            <span className="inline-price-box">
                ${props.price}
            </span>
            

            { cond ? yes : no

            }

            { props.beds === 0 ? null : 
<               span className="bedrooms">
                        {props.beds}br{" - "}
                    </span>
            }

            {
                props.sqft === undefined ? null :
                <span className="sqft">
                    {props.sqft}ft^2{' - '}
                </span>
            }


            

            <span className="location">
                ({props.location})
            </span>

        </div>
    )
}

export default Card