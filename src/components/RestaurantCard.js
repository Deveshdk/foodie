import { CDN_URL } from "../utils/constants";

const RestaurantCard =( props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, areaName} = resData?.info;

    return (
        <div className="res-card m-6 p-4 w-60 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
            <img  className="res-logo rounded-lg" alt="res-logo" src={CDN_URL.concat(cloudinaryImageId)} />
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>  {/* .join is used for array integration with comma*/}
            <h4>⭐️ {avgRating} * {resData?.info.sla.deliveryTime} mins</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

export default RestaurantCard;