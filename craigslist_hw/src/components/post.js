const Post = (props) => {
    return (
<div className="postContainer">
    <span className="price">{props.price}</span>
    <img className="image"src={`https://i.imgur.com/${props.image}`}/>
    <div className="description">
        <span className="date">{props.date}</span>
        <a href={props.link} className="title">{props.title}</a>
        <span className="priceDown">{props.price}</span>
        <p className="info">{props.info}</p>
    </div>
</div>  
    )
}

export default Post;



