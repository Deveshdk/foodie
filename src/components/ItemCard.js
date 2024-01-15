const ItemCard = (props) => {
    const {itemData} = props;
    const {name,price,description} = itemData?.card.info;
    return (
        <div className="items-card">
            <h4 className="item-name">{name}</h4>
            <span className="item-price">{Math.round(price/100)}</span>
            <p className="item-description">{description}</p>
        </div>
    );
};

export default ItemCard;