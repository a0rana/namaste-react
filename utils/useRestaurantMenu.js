import {useEffect, useState} from "react";
import {MENU_URL} from "./constants";

const useRestaurantMenu = (resId) => {
    const [menuData, setMenuData] = useState(null);
    useEffect(() => {
        async function fetchRestaurants() {
            const response = await fetch(`${MENU_URL}${resId}`);
            const data = await response.json();

            setMenuData(data);
        }

        fetchRestaurants();
    }, []);

    return menuData;
};

export default useRestaurantMenu;