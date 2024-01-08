import RestaurantCard from "./RestaurantCard";
import restCardsList from "../utils/mockData";
import { useState } from "react";
import {useEffect} from "react";

const Body = () =>{
    // this is a normal JS variable which can be updated like topRatedrestaurant= ["ABC"];
    // let topRatedrestaurant = [restCardsList];

    // normal JS const, which can be updated with push function
    //const topRatedrestaurant = [];
    //topRatedrestaurant.push("ABC");


    // state variable
    const [topRatedRestaurantList,setTopRatedRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.495531649422116&lng=77.17867344617845&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setTopRatedRestaurantList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    };

    // fetch is a method provided by browser not javascript. But it returns a promise.
    // One way to handle the promise is by using async and await.


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList=restCardsList.filter(res => res.info.avgRating>4);
                    setTopRatedRestaurantList(filteredList);
                }}>4+ Rated Restaurants</button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {topRatedRestaurantList.map(restaurant=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))};   {/**This is a config driven UI as the card is now dependent on data. */}
            </div>
        </div>
    )
};

export default Body;