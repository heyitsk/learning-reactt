import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/contants"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const Menu = () => {
    const [menuData, setmenuData] = useState(null);
    useEffect(()=>{
        getdata()
    },[])
    const {resid} = useParams();
    // console.log(params);//this contains the object which contains the resid 
    

    const getdata = async function (){
        const data = await fetch(MENU_URL+resid)
        const jsonData = await data.json()
        console.log(jsonData);
        setmenuData(jsonData.data)
        // console.log(menuData);
    }
    if(menuData===null) return <Shimmer/>; //if we use this below the const{name,city...} then it will print error bcz menuData is null and you are trying to traverse it.
    //what this does it it lets the api fetch the data until then shimmer will load and after the data loads the traversing will occur 



    const {name, city, avgRating, costForTwoMessage, cuisines} = menuData?.cards[2]?.card?.card?.info;
    const {itemCards} = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);
    
    return(
        <>
            <h2>Hotel name :- {name}</h2>
            <h3>city:- {city}</h3>
            <h3>avgRating:- {avgRating}</h3>
            <h4>{costForTwoMessage}</h4>
            <h3>{cuisines.join("-")}</h3>
            <h4>Recommended</h4>
            {/* <h5>{itemCards[0].card.info.name}</h5> */}
            <ul>
                {/* <h5>{itemCards.map(item => item.card.info.name)}</h5> this prints all side by side */}
                {itemCards.map(item => 
                <li key={item.card.info.id}>
                    {item.card.info.name} -Rs {item.card.info.price||item.card.info.defaultPrice}
                </li>
                )}
            </ul>
        </>
    )
}
export default Menu;