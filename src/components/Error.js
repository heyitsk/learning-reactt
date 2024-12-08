import { useRouteError } from "react-router-dom";
//this helps to manage errors efficiently 

const Error = ()=>{
    const err = useRouteError();
    //this return a detailed description of the error
    console.log(err);
    
    return(
        <div className="">
        <h1>Oops! something went wrong</h1>
        <h2>Check the URL again</h2>
        <h3>Status:{err.status}</h3>
        <h4>{err.statusText}</h4>
        </div>
    )
}
export default Error;