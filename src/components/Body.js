import React, {useEffect, useState} from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const BodyComponent = () => {
    let searchText = '';
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4660387&lng=78.3120888&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const data = await response.json();
            data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.promoted = true;
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
        <div>
            <div>
                <input className="border-1 m-2" type="text" onInput={(e) => {
                    searchText = e.target.value;
                }} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        const filteredData = restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurantList(filteredData);
                    }
                }}/>
                <button className="bg-amber-400 border-1 m-2 px-1" onClick={() => {
                    const filteredData = restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurantList(filteredData);
                }}>Search
                </button>
                <button className="bg-amber-400 border-1 m-2 px-1" onClick={() => {
                    const filteredData = restaurantList.filter(restaurant => restaurant.info.avgRating >= 4.5);
                    setFilteredRestaurantList(filteredData);
                }}>Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap cursor-pointer">
                {filteredRestaurantList.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant.info.id}
                          key={restaurant.info.id}>{restaurant.info.promoted ? (
                        <RestaurantCardPromoted restaurantData={restaurant?.info}/>) : (
                        <RestaurantCard restaurantData={restaurant?.info}/>)}</Link>
                ))}
            </div>
        </div>
    );
};

export default BodyComponent;