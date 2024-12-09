import RestCard from "./RestCard";
import resList from "../utils/demodata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    const onlineStatus = useOnlineStatus()
    if(onlineStatus===false) {
        return <h1>Check your connection</h1>
        
        
     }

    //this is called conditional rendering
    if (restaurantList.length===0){
        return <Shimmer/>
    }

 //STATE variable -> super powerful variable -> for that we use hooks and we use a hook called "useState"
    return(
        <div className="m-4">
            <div className="search-container">
                <input className="border-2 border-black-500 rounded-md p-2 shadow-sm" type="text" placeholder="Search.." 
                value={searchText}
                onChange={(e)=>{
                    setsearchText(e.target.value)
                }}></input>
                <button className="search-button bg-slate-700 text-white p-2 mx-2 rounded-sm" 
                
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
                <button className="filter-btn bg-slate-700 text-white p-2  rounded-sm my-2 " onClick={()=> {
                    // restaurantList=restaurantList.filter(restaurant => restaurant.info.avgRating>4)
                    //this logic filters the restaurant list acc to the logic and updates the restaurant list. But even when the restaurant list is updated the UI doesn't change bcz restaurant list is normal js variable. solution->

                    fltrlist=filteredList.filter(restaurant => restaurant.info.avgRating>4)
                    setrestaurantlist(fltrlist);
                    //here we save the edited list in filtered list and pass the filtered list in the setrestaurantlist function which updates the UI 

                    
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restcard-container grid grid-cols-5 gap-7">
                {/* <RestCard resname="kfc" reslocation="delhi"/> this is also a lengthy process as we will get data through backend and we can't write these values ourselves*/}
                {/* <RestCard resInfo = {resList[0]}/> it is better to use a loop */}
                {
                  restaurantList.map((restaurant) =>
                     (<Link to={"/restaurants/"+restaurant.info.id} 
                        key={restaurant.info.id}>
                            <RestCard  resInfo={restaurant}/>
                    </Link>)) 
                  //NOTE :- whenever you use map function  make sure to use unique key for each
                }
                {/* <RestCard resname="dominos" reslocation="punjab"/>  */}
                {/* to dynamically ennter data in these cards we use "props". Just like components are normal js functions props are normal js arguments to the function */}
            </div>
        </div>
    )
}

export default Body;