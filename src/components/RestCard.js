import { CDN_URL } from "../utils/contants";

const RestCard = (props) => {
    //arguments that are passed react will wrap them as object and will be called as props so props are objects and we can access object properties using dot notation to dynamically enter data 
    // console.log(props);
    // console.log(props); //this contain the resInfo object 
    // console.log(props.resInfo); //this line and 981 logs the same thing that we've taken the reInfo object from the props aobject and stored it in resInfo var
    const {resInfo} = props;
    // console.log(resInfo);
    
    const {name, locality, costForTwo, cloudinaryImageId, avgRating} = resInfo?.info
    
    return(
        <div className="rest-card border-4 border-black-500 p-3 flex flex-col ">
            <div className="restimg-container">
                <img className="img h-60 w-full"src=
                {CDN_URL+cloudinaryImageId
                }/>
            </div>
            <div id="rest-info">
                {/* <h4>connough place</h4>
                <h5>rating</h5> */}
                {/* <h4>{resInfo.info.name}</h4> this is not a good practice so we'll destructure it*/}
                <h4>{name}</h4>
                <h5>{locality}</h5>
                <h6>{costForTwo}</h6>
                <h6>{avgRating}</h6>
            </div>
        </div>
    )
}

 export const withOpenLabel = (RestCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="bg-black text-white rounded-md p-2 absolute">Is Open</label>
                <RestCard {...props} />
                {/* we'll receive the resInfo here */}
            </div>
        )
    }
}




export default RestCard;