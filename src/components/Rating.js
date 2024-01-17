const Rating = (props) =>{
    const {avgRating} = props;
    const {totalRatings} = props;
    return (
        <div className="rating">
            <h4>⭐️ {avgRating}</h4>
            <p>----------------</p>
            <p>{totalRatings}</p>
        </div>
    )
}

export default Rating;