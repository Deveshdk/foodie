const MapCards = (props) =>{
    const {cardDetails} = props;
    const {name,price,description,imageId} = cardDetails?.card?.info;
    return (
        <div className="shadow-sm  py-7 hover:bg-gray-200 rounded-lg">
            <h4 className="item-name text-xl py-1">{name}</h4>
            <span className="item-price py-0.5">Rs. {Math.round(price/100)}</span>
            <p className="item-description py-1">{description}</p>
        </div>
    )
}

export default MapCards;