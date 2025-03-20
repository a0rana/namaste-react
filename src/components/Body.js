import React, {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4660387&lng=78.3120888&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const data = await response.json();
            setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData();
    }, []);

    if (restaurantList.length === 0) {
        return (
            <Shimmer/>
        );
    }

    return (
        <div className="body">
            <div>
                <button className="btnTopRated" onClick={() => {
                    const filteredData = restaurantList.filter(restaurant => restaurant.info.avgRating >= 4.5);
                    setRestaurantList(filteredData);
                }}>Top Rated Restaurants
                </button>
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