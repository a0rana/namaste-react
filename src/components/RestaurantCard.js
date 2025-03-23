import React from "react";
import {RES_CARD_URL} from "../../utils/constants";

const RestaurantCard = (props) => {
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = props?.restaurantData.info;
    return (
        <div className="m-4 p-4 w-[250px] h-[500px] bg-amber-100 hover:bg-amber-300 rounded-lg">
            <img className="rounded-lg"
                 src={RES_CARD_URL + cloudinaryImageId}
                 alt="res-image"/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h5>Cuisines: {cuisines.join(', ')}</h5>
            <h5>Rating: {avgRating} stars</h5>
            <h5>ETA: {sla.deliveryTime} minutes</h5>
        </div>
    );
};

export default RestaurantCard;