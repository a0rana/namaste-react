import restaurantList from "../../utils/mockData";
import React from "react";
import RestaurantCard from "./RestaurantCard";

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default BodyComponent;