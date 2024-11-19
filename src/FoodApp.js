import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const FoodApp = () => {
    return (
    <div id="FoodApp">
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
    )
}

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
            }
        ],
        errorElement:<Error/> // this will render if the path is not correct 
    },
    
])
//we want the header to stay there and the content changes

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FoodApp/>)
root.render(<RouterProvider router={appRouter}/>)