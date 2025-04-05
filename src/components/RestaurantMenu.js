import {useParams} from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import {useState} from "react";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
    const {resId} = useParams();
    const menuData = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    const resInfo = menuData?.data?.cards[2]?.card?.card?.info;
    const itemCards = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => {
        return card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    });

    return (menuData === null) ? <Shimmer/> : (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{resInfo.name}</h1>
            <h3 className="text-lg">{'Cuisines: ' + resInfo.cuisines.join(", ")}</h3>
            <h3 className="text-lg mb-4">Price: {resInfo.costForTwoMessage}</h3>
            {itemCards?.map((item, index) => (
                <RestaurantCategory
                    key={item?.card?.card?.title}
                    item={item}
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(index)}/>
            ))}
        </div>
    );
}

export default RestaurantMenu;