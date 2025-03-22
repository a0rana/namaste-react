import React, {use, useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const BodyComponent = () => {
    let searchText = '';
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4660387&lng=78.3120888&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const data = await response.json();
            setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <h1>Your internet is not working!!</h1>
        );
    }

    if (restaurantList.length === 0) {
        return (
            <Shimmer/>
        );
    }

    return (
        <div className="body">
            <div>
                <input className="input-text" type="text" onInput={(e) => {
                    searchText = e.target.value;
                }} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        const filteredData = restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurantList(filteredData);
                    }
                }}/>
                <button className="btn-search" onClick={() => {
                    const filteredData = restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurantList(filteredData);
                }}>Search
                </button>
                <button className="btnTopRated" onClick={() => {
                    const filteredData = restaurantList.filter(restaurant => restaurant.info.avgRating >= 4.5);
                    setFilteredRestaurantList(filteredData);
                }}>Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurantList.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard
                        restaurantData={restaurant}/></Link>
                ))}
            </div>
        </div>
    );
};

export default BodyComponent;