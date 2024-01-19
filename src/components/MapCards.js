const MapCards = (props) =>{
    const {cardDetails} = props;
    const {name,price,description,imageId} = cardDetails?.card?.info;
    return (
        <div >
            <h4 className="item-name">{name}</h4>
            <span className="item-price">{Math.round(price/100)}</span>
            <p className="item-description">{description}</p>
        </div>
    )
}

export default MapCards;