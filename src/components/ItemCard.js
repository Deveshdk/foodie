import MapCards from "./MapCards";



const ItemCard = (props) => {
    const {itemData} = props;
    return (
        <div className="items-card">
            {itemData.map((item)=>(
                <MapCards key={item.card.info.id} cardDetails={item}/>
            ))}
        </div>
    );
};

export default ItemCard;