import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import Coupons from "./Coupons";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () =>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const menuCards = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards;

    if (resInfo=== null ) return <Shimmer />

    const {name,cuisines,costForTwoMessage,areaName,sla,avgRatingString,totalRatingsString,feeDetails} = resInfo?.cards[0].card.card.info;
    const couponsList = resInfo?.cards[1].card.card.gridElements.infoWithStyle.offers;
    return (
        <div className="menu-container  justify-items-center px-20 aspect-square ">
            <h2 className="text-4xl m-5 ">{name}</h2>
            <div className="restaurant-header  flex justify-between px-4 m-4">
                <div>
                    <p>{cuisines.join(',')}</p>
                    <p>{areaName}, {sla.lastMileTravelString}</p>
                </div>
                <div>
                        <Rating key={feeDetails.restaurantId} avgRating = {avgRatingString} totalRatings = {totalRatingsString}/>
                </div>
            </div>
            <p className="shadow-sm m-2 py-2">🚴‍♂️ {feeDetails.message}</p>
            <h3 className="shadow-sm m-2 py-2">🕒 {sla.slaString}    💲  {costForTwoMessage}</h3>
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
            <div className="menuList">
                <ul>
                    {menuCards.filter(filtered => filtered.card.card.title === "Recommended").map((filtered) => (
                        <>
                        <h2 className="text-xl font-bold shadow-md py-2">{filtered.card.card.title}</h2>
                        <ul>
                            <ItemCard key={filtered.card.card.type} itemData={filtered.card.card.itemCards}/>
                        </ul>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Menu;