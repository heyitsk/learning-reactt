import RestCard from "./RestCard";
import resList from "../utils/demodata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurantList, setrestaurantlist] = useState([])
    const [filteredList, setfilteredlist] = useState([])

    //if you want to update the restaurantList u use the setrestaurantlist method 

    //this is a normal js variable 
//     let restaurantList2 = [
//         {
//             "info": {
//           "id": "630193",
//           "name": "Dominos",
//           "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
//           "locality": "Sinchai Colony",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "North Indian"
//           ],
//           "avgRating": 3.3,
//          }
//         },
//          {
//          "info": {
//           "id": "630194",
//           "name": "KFc",
//           "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
//           "locality": "Sinchai Colony",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "North Indian"
//           ],
//           "avgRating": 4.3,
//         }
//         },
//         {
//             "info": {
//           "id": "630195",
//           "name": "Burger King",
//           "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
//           "locality": "Sinchai Colony",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "North Indian"
//           ],
//           "avgRating": 4.5,
//         }
//         }
// ]
    const [searchText, setsearchText] = useState("")
    useEffect(()=>{      
      // console.log("use effect called");
      fetchData();
      
    },[])
    // console.log("body rendered"); //this will print twice once when the body is intially rendered with skimmer ui and the second when the API loads and real data get reredned
    
    const fetchData =async ()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    

    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setrestaurantlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    

    //this is called conditional rendering
    if (restaurantList.length===0){
        return <Shimmer/>
    }

 //STATE variable -> super powerful variable -> for that we use hooks and we use a hook called "useState"
    return(
        <div id="body-container">
            <div id="search-container">
                <input type="text" placeholder="Search.." 
                value={searchText}
                onChange={(e)=>{
                    setsearchText(e.target.value)
                }}></input>
                <button id="search-button" 
                style={{backgroundColor: "gray", border: "none", borderRadius: "5px", padding: "5px"}}
                onClick={()=>{
                    // console.log({searchText});
                    
                    
                    const filterres = filteredList.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )

                    

                    
                    setrestaurantlist(filterres)
                }}
                >Search</button>
            </div>
            <div id="filterbtn-container">
                <button id="filter-btn" onClick={()=> {
                    // restaurantList=restaurantList.filter(restaurant => restaurant.info.avgRating>4)
                    //this logic filters the restaurant list acc to the logic and updates the restaurant list. But even when the restaurant list is updated the UI doesn't change bcz restaurant list is normal js variable. solution->

                    fltrlist=filteredList.filter(restaurant => restaurant.info.avgRating>4)
                    setrestaurantlist(fltrlist);
                    //here we save the edited list in filtered list and pass the filtered list in the setrestaurantlist function which updates the UI 

                    
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div id="restcard-container">
                {/* <RestCard resname="kfc" reslocation="delhi"/> this is also a lengthy process as we will get data through backend and we can't write these values ourselves*/}
                {/* <RestCard resInfo = {resList[0]}/> it is better to use a loop */}
                {
                  restaurantList.map(restaurant => <RestCard key={restaurant.info.id} resInfo={restaurant}/>) 
                  //NOTE :- whenever you use map function  make sure to use unique key for each
                }
                {/* <RestCard resname="dominos" reslocation="punjab"/>  */}
                {/* to dynamically ennter data in these cards we use "props". Just like components are normal js functions props are normal js arguments to the function */}
            </div>
        </div>
    )
}

export default Body;