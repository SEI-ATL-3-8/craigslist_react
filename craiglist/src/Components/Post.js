const Post = (props) => {
    return(
        <div className="post">   
            <h3 className="price">{props.price}</h3>
            <img className="image" src ={props.image}></img>
            <span className="date">{props.postedOn}</span>
            <span className="title">{props.title}</span>
            <p className="beds">{props.price + " " + props.beds + " " + props.location}</p>
            
        </div>
    )
}

export default Post