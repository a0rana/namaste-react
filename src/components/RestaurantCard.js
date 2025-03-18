import React from "react";
import {RES_CARD_URL} from "../../utils/constants";

const RestaurantCard = (props) => {
    const {id, name, cloudinaryImageId, cuisines, avgRating, sla} = props?.restaurantData.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-card-img"
                 src={RES_CARD_URL + cloudinaryImageId}
                 alt="res-image"/>
            <h3>{name}</h3>
            <h5>Cuisines: {cuisines.join(', ')}</h5>
            <h5>Rating: {avgRating} stars</h5>
            <h5>ETA: {sla.deliveryTime} mins</h5>
        </div>
    );
};

export default RestaurantCard;