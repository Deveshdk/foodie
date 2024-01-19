import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import Coupons from "./Coupons";
import { MENU_API } from "../utils/constants";

const Menu = () =>{
    const [resInfo, setResInfo] = useState(null);
    const [menuCards,setMenuCards]= useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json?.data);
        setMenuCards(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    }


    if (resInfo=== null ) return <Shimmer />

    const {name,cuisines,costForTwoMessage,areaName,sla,avgRatingString,totalRatingsString,feeDetails} = resInfo?.cards[0].card.card.info;
    const couponsList = resInfo?.cards[1].card.card.gridElements.infoWithStyle.offers;
    return (
        <div className="menu-container">
            <h2>{name}</h2>
            <div className="restaurant-header">
                <div>
                    <p>{cuisines.join(',')}</p>
                    <p>{areaName}, {sla.lastMileTravelString}</p>
                </div>
                <div>
                        <Rating key={feeDetails.restaurantId} avgRating = {avgRatingString} totalRatings = {totalRatingsString}/>
                </div>
            </div>
            <p>🚴‍♂️ {feeDetails.message}</p>
            <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            <h3>🕒 {sla.slaString}    💲  {costForTwoMessage}</h3>
            <div className="coupons">
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
                    {/* {menuCards.map((menu) => (
                        <>
                        <h2>{menu.card.card.title}</h2>
                        {console.log(menuCards.filter(filtered => filtered.card.card.title === "Recommended"))}
                        <ul>{menuCards.filter(filtered => filtered.card.card.title == "Recommended").map((filtered) =>
                            <ItemCard key={filtered.card.card.type} itemData={filtered.card.card.itemCards}/>
                        )}
                        </ul>
                        </>
                    ))} */}
                    {menuCards.filter(filtered => filtered.card.card.title === "Recommended").map((filtered) => (
                        <>
                        <h2>{filtered.card.card.title}</h2>
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