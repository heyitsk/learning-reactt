import RestCard from "./RestCard";
import resList from "../utils/demodata";

const Body = () => {
    return(
        <div id="body-container">
            <div id="search-container">
                <input type="text" placeholder="Search.."></input>
                <button id="search-button" 
                style={{backgroundColor: "gray", border: "none", borderRadius: "5px", padding: "5px"}}
                >Search</button>
            </div>
            <div id="restcard-container">
                {/* <RestCard resname="kfc" reslocation="delhi"/> this is also a lengthy process as we will get data through backend and we can't write these values ourselves*/}
                {/* <RestCard resInfo = {resList[0]}/> it is better to use a loop */}
                {
                  resList.map(restaurant => <RestCard key={restaurant.info.id} resInfo={restaurant}/>) 
                  //NOTE :- whenever you use map function  make sure to use unique key for each
                }



                {/* <RestCard resname="dominos" reslocation="punjab"/>  */}
                {/* to dynamically ennter data in these cards we use "props". Just like components are normal js functions props are normal js arguments to the function */}



            </div>
        </div>
    )
}

export default Body;