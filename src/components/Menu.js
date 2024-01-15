import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";

const Menu = () =>{
const [resInfo, setResInfo] = useState(null);
const [menuCards,setMenuCards]= useState(null);

const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.495531649422116&lng=77.17867344617845&restaurantId=23401&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A2%2C%22primaryRestaurantId%22%3A27379%2C%22cloudinaryId%22%3A%220bf19a82b109b40c2f5c56d00f071a33%22%2C%22brandId%22%3A2%2C%22dishFamilyId%22%3A%22846512%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION");
        const json = await data.json();
            setResInfo(json?.data);
            setMenuCards(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    }


    if (resInfo=== null ) return <Shimmer />

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0].card.card.info;
    const menuList = menuCards.filter(menu => menu.card.card.type.includes("ItemCategory"));
    console.log(menuList);
    return (
        <div className="menu-container">
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage}</p>
            <div className="menu-list">
                <ul>

                </ul>
            </div>
            <ul>
                {menuCards.map((menu) => (
                    <li>
                        <h2>{menu.card.card.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu;