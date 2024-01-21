import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategoryCard = ({data, showItems, setShowIndex}) =>{


    const handleClick = ()=>{
        setShowIndex();
    }

    return (
        <div>
            <div className="shadow-lg m-auto my-4  py-7 p-4  rounded-lg">
                {/** Accordion Header */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {/** Accordion Body */}
                { showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategoryCard;