import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { userContext } from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("parent constructor");
        
    }
    componentDidMount(){
        // console.log("parent component mount");
        
    }
    render(){
        // console.log("parent render");
        
        return(
            <div className="m-4 border-2 border-black-500 shadow-md p-2">
                <h1>this is the about page section</h1>
                <div>
                    <userContext.Consumer>
                        {({loggedInUser})=>{
                            // console.log(loggedInUser);
                            <h1 className="font-bold">{loggedInUser}</h1>
                            
                        }}

                    </userContext.Consumer>
                </div>
                <h2>thank u for visiting</h2>
                {/* <User name={"Kushagra"} location={"akgec"}/> */}
                <UserClass name={"1st"} location={"akgec classs"}/>
                {/* <UserClass name={"2nd"} location={"akgec classs"}/> */}

            </div>
        )
    }
    
}

export default About;