import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList =({items})=>{
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        // dispatch an action
        dispatch(addItem(item))
    }
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
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={()=>handleAddItem(item)}>
                                Add +
                            </button>

                        </div>
                        <img src={CDN_URL + item.card?.info?.imageId} className="w-full h-28 rounded-lg"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;