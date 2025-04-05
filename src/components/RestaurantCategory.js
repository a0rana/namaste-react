import React from 'react';
import ItemList from "./ItemList";

function RestaurantCategory({item, showItems, setShowIndex}) {
    const handleArrowClick = () => {
        setShowIndex();
    };

    return (
        <div className="border-2 border-gray-200 shadow-xl rounded-lg my-1 w-1/2 bg-amber-50">
            <div className="flex justify-between items-center mb-2">
                    <span
                        className="font-semibold text-lg">{item?.card?.card?.title} ({item?.card?.card?.itemCards.length})</span>
                <span className="text-xl cursor-pointer"
                      onClick={() => handleArrowClick()}>⬇️</span>
            </div>
            {showItems && <ItemList items={item?.card?.card?.itemCards}/>}
        </div>
    );
}

export default RestaurantCategory;