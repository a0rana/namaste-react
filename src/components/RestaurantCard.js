import React, {useContext} from "react";
import {RES_CARD_URL} from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = props.restaurantData;
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="m-4 p-4 w-[250px] h-[500px] bg-amber-100 hover:bg-amber-300 rounded-lg">
            <img className="rounded-lg"
                 src={RES_CARD_URL + cloudinaryImageId}
                 alt="res-image"/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h5>Cuisines: {cuisines.join(', ')}</h5>
            <h5>Rating: {avgRating} stars</h5>
            <h5>ETA: {sla.deliveryTime} minutes</h5>
            <h5>User: {loggedInUser}</h5>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="font-bold absolute py-2 px-5 bg-amber-400 rounded-xl">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;