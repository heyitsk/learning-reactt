//this is a class based component which is a normal js class 

import { count } from "console";
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(props);

        this.state={
            count:0,
            count2:2
        }
        console.log("child constructor");
        
        
    }
    componentDidMount(){
        console.log("child component mount");
        
    }
    render(){
    const {name,location} = this.props;
    const {count, count2} = this.state;
    console.log("child render");
    

        return(
            <div className="user-card">
                <h3>Name: {name}</h3>
                <h4>Location :  {location}</h4>
                <button onClick={()=>{
                    this.setState({
                        count : count+1
                    })
                }}>count increase</button>
                <h5>Count : {count}</h5>
                {/* <h5>Count : {count2}</h5> */}
                <h5>Contact : asdadas@asdas</h5>
            </div>
        )
    }
}
export default UserClass;

//react.component is a class which we import from the react and we're extended properties of Userclass 
//difference with functional component -->
                        // -- we use render
                        // -- import react
                        // -- extends react.component
                        // -- to access the props we use constructor and super 
                        // -- we deconstruct inside the render(){}
                        // -- we desconstruct from this.props not just props 
                        // -- state is a big object which contains all state variables so count and count 2 were declared inside it  
                        // -- never directly update the value in class components like count : count+1
                        // -- this.setState is an object which contains the updated value of the state variable 
                        // if you have 10 state variable declared in the this.state and on a button click inside this.setState you added just count and count2 the react will only take these 2 varibale and won't touch any other 
                        // functional components are called and class based components have their instance created when page is loaded 
                        