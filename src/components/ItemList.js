import { CDN_URL } from "../utils/constants";

const ItemList =({items})=>{
    console.log(items);
    return (
        <div className="p-4 m-4">
            {items.map((item) =>(
                <div className="shadow-sm flex justify-between py-2 m-2" key={item.card?.info?.id}>
                    <div className="text-left w-9/12">
                        <p className="font-bold py-2">{item.card?.info?.name}</p>
                        <p>₹ {item.card?.info?.price ? item.card?.info?.price/100 : item.card?.info?.defaultPrice/100}</p>
                        <p className="text-xs py-2">{item.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <img src={CDN_URL + item.card?.info?.imageId} className="w-full h-28 rounded-lg"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;