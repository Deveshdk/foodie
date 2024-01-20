import { CDN_URL } from "../utils/constants";

const RestaurantCard =( props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, areaName} = resData?.info;

    return (
        <div className="res-card m-6 p-4 w-60 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
            <img  className="res-logo rounded-lg w-110 h-80" alt="res-logo" src={CDN_URL.concat(cloudinaryImageId)} />
            <h3 className="font-bold py-2">{name}</h3>
            <p className="text-xs">{cuisines.join(", ")}</p>  {/* .join is used for array integration with comma*/}
            <p className="text-xs">⭐️ {avgRating} * {resData?.info.sla.deliveryTime} mins</p>
            <p className="text-xs">{areaName}</p>
        </div>
    );
};

export default RestaurantCard;