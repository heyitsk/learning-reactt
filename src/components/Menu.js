import useMenuData from "../utils/useMenuData";
import Shimmer from "./Shimmer";
import { useParams, useSearchParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import { useState } from "react";
const Menu = () => {
    const [showIndex, setShowIndex] = useState(null)
    const {resid} = useParams();
    // console.log(params);//this contains the object which contains the resid 
    
    const menuData = useMenuData(resid);
    
    if(menuData===null) return <Shimmer/>; //if we use this below the const{name,city...} then it will print error bcz menuData is null and you are trying to traverse it.
    //what this does it it lets the api fetch the data until then shimmer will load and after the data loads the traversing will occur 



    const {name, city, avgRating, costForTwoMessage, cuisines} = menuData?.cards[2]?.card?.card?.info;
    const {itemCards} = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);
    // const categories = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swig…on.food.v2.ItemCategory")
    const c = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log("category",c);
    
    return(
        <>
        <div className="text-center p-4 text-[20px]">
            <h2 className="font-bold text-[25px]">Hotel name :- {name}</h2>
            <h3>City:- {city}</h3>
            <h3>Average Rating:- {avgRating}</h3>
            <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
            {
                c.map((category,index)=><ResCategory 
                key={index} 
                data={category.card.card}
                showList={index===showIndex?true:false}
                setShowIndex={()=>setShowIndex(index)}
                />)
            }
        </div>
        </>
    )
}
export default Menu;