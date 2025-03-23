import {useParams} from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

function RestaurantMenu() {
    const {resId} = useParams();
    const menuData = useRestaurantMenu(resId);

    const resInfo = menuData?.data?.cards[2]?.card?.card?.info;
    const items = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (menuData === null) ? <Shimmer/> : (
        <div className="text-left">
            <h1 className="font-bold my-6 text-2xl">{resInfo.name}</h1>
            <h3 className="text-lg">{'Cuisines: ' + resInfo.cuisines.join(", ")}</h3>
            <h3 className="text-lg">Price: {resInfo.costForTwoMessage}</h3>
            <br/>
            <h3 className="font-bold text-lg">Menu</h3>
            <ul>
                {items.map((item) => (
                    <li className="text-lg"
                        key={item?.card?.info?.id}>{item?.card?.info?.name}{", price: ₹" + item?.card?.info?.price / 100}</li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;