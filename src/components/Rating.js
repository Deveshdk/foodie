const Rating = (props) =>{
    const {avgRating} = props;
    const {totalRatings} = props;
    return (
        <div className="rating bg-green-100 items-center px-1 rounded-lg m-4">
            <h4 className="px-1 py-1 items-center justify-center">⭐️ {avgRating}</h4>
            <p className="px-1 py-1">{totalRatings}</p>
        </div>
    )
}

export default Rating;