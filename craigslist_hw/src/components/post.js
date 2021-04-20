const Post = (props) => {
    return (
<div className="postContainer">
    <span className="price">{props.price}</span>
    <img className="image"src={props.image}/>
    <div className="description">
        <span className="date">{props.date}</span>
        <a href={props.link} className="title">{props.title}</a>
        <span className="priceDown">{props.price}</span>
        {props.bedrooms !== 0 ? `${props.bedrooms}br - ` : null}
        {props.size ? `${props.size}sqft - ` : null}
        <p className="location">{props.location}</p>
    </div>
</div>  
    )
}

export default Post;



