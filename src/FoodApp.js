import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
// import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";


const FoodApp = () => {
    return (
    <div id="FoodApp">
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
    )
}
const Grocery = lazy(()=>import("./components/Grocery"))
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<FoodApp/>,
        children:[
            {
                path:"/",
                element:<Body/> 
            },
            {
                path:"/about",
                element:<About/> 
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>hello</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resid", //the semicolon means that the resid is dynamic and can be used for dynamic routing. You will read this resid using another hook provided by router dom called useParams
                element:<Menu/>
            }
        ],
        errorElement:<Error/> // this will render if the path is not correct 
    },
    
])
//we want the header to stay there and the content changes

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FoodApp/>)
root.render(<RouterProvider router={appRouter}/>)