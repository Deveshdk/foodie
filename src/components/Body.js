import RestaurantCard from "./RestaurantCard";
import restCardsList from "../utils/mockData";
import { useState } from "react";
import {useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    // this is a normal JS variable which can be updated like topRatedrestaurant= ["ABC"];
    // let topRatedrestaurant = [restCardsList];

    // normal JS const, which can be updated with push function
    //const topRatedrestaurant = [];
    //topRatedrestaurant.push("ABC");


    // state variable
    const [topRatedRestaurantList,setTopRatedRestaurantList] = useState([]); // keep this intact for filtering
    const [filteredRestaurant,setFilteredRestaurant] = useState([]); // use this for UI

    const [searchRestaurant, setSearchRestaurant] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.495531649422116&lng=77.17867344617845&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional Chaining
        setTopRatedRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // fetch is a method provided by browser not javascript. But it returns a promise.
    // One way to handle the promise is by using async and await.
    

    // This is called conditional rendering
    // if(topRatedRestaurantList.length===0){
    //     return <Shimmer />;
    // }


    // Ternary operator and conditional rendering and Shimmer effect
    // means if length is 0 return shimmer else return body
    return topRatedRestaurantList.length===0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-text" value={searchRestaurant} onChange={(e)=>{
                        setSearchRestaurant(e.target.value)
                    }}></input>
                    <button className="search-btn" onClick={()=>{
                        const filteredList = topRatedRestaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=topRatedRestaurantList.filter(res => res.info.avgRating>4);
                    setFilteredRestaurant(filteredList);
                }}>4+ Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(restaurant=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))};   {/**This is a config driven UI as the card is now dependent on data. */}
            </div>
        </div>
    )
};

export default Body;