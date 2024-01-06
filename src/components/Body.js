import RestaurantCard from "./RestaurantCard";
import restCardsList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    // this is a normal JS variable which can be updated like topRatedrestaurant= ["ABC"];
    // let topRatedrestaurant = [restCardsList];

    // normal JS const, which can be updated with push function
    //const topRatedrestaurant = [];
    //topRatedrestaurant.push("ABC");


    // state variable
    const [topRatedRestaurantList,setTopRatedRestaurantList] = useState(restCardsList);
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