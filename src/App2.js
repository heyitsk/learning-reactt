import React from "react";
import ReactDOM from "react-dom/client";

//React componenets start from cap letter 
//react functional component is a normal js function which returns some JSX or a react element 

const HeadingComponent =  () => {
    return <h1>hello react functional component h1</h1>
}
//or 
const HeadingComponent2 =  () => <h1>hello react functional component</h1>
//or 
const HeadingComponent3 = function (){
    return (
        <div id="container">
            <h1>asdasdad</h1>
            <h2>asdasdasda</h2>
        </div>
        
    )
}


// you can write js inside jsx by using {} anything inside these brackets will run as normal js code 
//to write "react element" isnide react component put it inside {}
const number = 1000; 

//if you want to write multiple elements enclose them within ()
const DivComponent = () => (
    <div id="conatiner">
        <h1>hello react functional component</h1>
        <h2>hello world </h2>
        <h3>{number}</h3>
        <h4>{2+3}</h4>
        <HeadingComponent/> 
        <HeadingComponent></HeadingComponent>
        {HeadingComponent()}
        {/* since we can write js code inside it we can simply call the functional component bcz at the end of the day this is a js function */}
        {/* this will render HeadingComponent inside DivComponent. This is called component composition. they all are same */}

    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));


//to render a react component you enclose the component name within <...../> bcz on encountering these brackets bable understands that okay this is a component 
root.render(<DivComponent/>)