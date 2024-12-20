import React from "react";
import ReactDOM from "react-dom/client";


const h1 = React.createElement("h1",{id:"heading", xyz:"abc"},"hello world inside react")
    //with the above command we have created a h1 element with content written inside it. Since creating an element is a function of core react we've used React 
    //3d argument is the "children" or basically what should come inside the h1 element 

// console.log(h1); 
    //this statement shows that the h1 is an "OBJECT" and not an html element with props 

const root = ReactDOM.createRoot(document.getElementById("root"));
    //with the above command we have created a root inside the div element for rendering heading or like react components. This work of creating root is a work of React Dom and not core react that's why we used ReactDOM

root.render(h1);
    //what this statemtn does is it takes the h1 object converts it in the h1 html element and renders it on the page "h1 object" -> "h1 html element and shows it"


/*
 * to create such nested structure
 * <div id="parent"
 *      <div id = "child">
 *              <h1>i am a h1 tag</h1>
 *              <h2>i am a h2 tag</h2> to create such sibling pass an array in 3rd argument
 *      </div>
 *      <div id = "child2">
 *              <h1>i am a h1 tag</h1>
 *              <h2>i am a h2 tag</h2> to create such sibling pass an array in 3rd argument
 *      </div>
 * </div>
 */

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"h1 heading"},"i am a H1 tag"),
        React.createElement("h2",{id:"h2 heading"},"i am a H2 tag"), ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{id:"h1 heading"},"i am a H1 tag"),
        React.createElement("h2",{id:"h2 heading"},"i am a H2 tag"), ]
    )]
)
console.log(parent);

const imageUrl = "https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/KU5VD3C_sybhpxwl_1_48559254.jpg?q=80";

//this makes the code complicated so to simplify it JSX was used. JSX is not a part of react it is just used to make react code look easy. JSX is not HTML inside javascript it is a "HTML/XML  like syntax". 
//attribute in JSX are written in camelCase 
const JSXheading = <h1 id="heading">Hello react using JSX</h1>
// console.log(JSXheading);
const JSXdiv = (<div id="parent">
    <div id="child" className="headingcontainer">
        <h1>i am a h1 tag</h1>
        <h2>i am a h2 tag</h2>
    </div>
    <div id="child2" className="headingcontainer">
        <h1>i am a h1 tag</h1>
        <h2>i am a h2 tag</h2>
    </div>
    <div id="image">
        <img src="https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/KU5VD3C_sybhpxwl_1_48559254.jpg?q=80" alt="asdas" />
        <img src={imageUrl} alt="asdas" />
    </div>
</div>)
console.log(JSXdiv);




// root.render(parent)
//this statement can render only 1 div so the above statement gets overwritten 
// root.render(JSXheading)
root.render(JSXdiv)