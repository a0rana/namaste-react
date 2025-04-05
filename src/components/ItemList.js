import React from 'react';
import {LOGO_URL, RES_CARD_URL} from "../../utils/constants";

function ItemList({items}) {
    return (
        <div>
            <ul>
                {items.map((card) => (
                    <li
                        key={card?.card?.info?.id}
                        className="flex justify-between items-center py-4">
                        <div className="text-lg">
                            {card?.card?.info?.name}
                            <span
                                className="ml-2"> - ₹{card?.card?.info.price ? card?.card?.info.price / 100 : card?.card?.info.defaultPrice / 100}
                            </span>
                        </div>
                        <img
                            src={RES_CARD_URL + card?.card?.info?.imageId}
                            alt={card?.card?.info?.name}
                            className="w-24 h-auto object-cover rounded-md"
                        />
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default ItemList;