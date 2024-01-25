import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import Coupons from "./Coupons";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryCard from "./RestaurantCategoryCard";
import { useState } from "react";

const Menu = () =>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null);
    const category = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter((category)=>category?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    if (resInfo=== null ) return <Shimmer />

    const {name,cuisines,costForTwoMessage,areaName,sla,avgRatingString,totalRatingsString,feeDetails} = resInfo?.cards[0].card.card.info;
    const couponsList = resInfo?.cards[1].card.card.gridElements.infoWithStyle.offers;
    return (
        <div className="menu-container  text-center w-9/12 m-auto aspect-square ">
            <h2 className="text-4xl m-5 text-left ">{name}</h2>
            <div className="restaurant-header  flex justify-between px-4 m-4">
                <div>
                    <p>{cuisines.join(',')}</p>
                    <p>{areaName}, {sla.lastMileTravelString}</p>
                </div>
                <div>
                        <Rating key={feeDetails.restaurantId} avgRating = {avgRatingString} totalRatings = {totalRatingsString}/>
                </div>
            </div>
            <p className="shadow-sm m-2 py-2 text-left">🚴‍♂️ {feeDetails.message}</p>
            <h3 className="shadow-sm m-2 py-2 text-left">🕒 {sla.slaString}    💲  {costForTwoMessage}</h3>
            <div className="coupons flex">
                    {couponsList.map((coupon) =>(
                    <Coupons key={coupon.info.offerIds[0]} couponData ={coupon} />
                    ))}
            </div><br /><br />
            {/* <div className="vegOnly">
                <button onClick={()=>{
                    const vegList = 
                }}>Veg Only</button>
            </div> */}
            <div>
                {category.map((category,index)=>(
                    <RestaurantCategoryCard key={category?.card?.card.title} data={category?.card?.card}
                    showItems={index === showIndex ? true :false}
                    setShowIndex={()=>setShowIndex(index)}/>
                ))}
            </div>
        </div>
    )
}

export default Menu;