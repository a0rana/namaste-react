import {useParams, useRouteError} from "react-router";
import React, {useEffect, useState} from "react";
import {MENU_URL} from "../../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

function RestaurantMenu() {
    const {resId} = useParams();
    const menuData = useRestaurantMenu(resId);
    
    const resInfo = menuData?.data?.cards[2]?.card?.card?.info;
    const items = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (menuData === null) ? <Shimmer/> : (
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <h3>{'Cuisines: ' + resInfo.cuisines.join(", ")}</h3>
            <h3>Price: {resInfo.costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
                {items.map((item) => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}{", price: ₹" + item?.card?.info?.price / 100}</li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;