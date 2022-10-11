import React from "react";
import './Screen.css'
import Home from './Home';
import CoverFlow from './CoverFlow';
import Music from './Music';
import Settings from './Settings';
import Games from './Games';



import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
       
    },
    {
        path: "/music",
        element:  <Music/>,
        
    },
    {
        path: "/coverflow",
        element: <CoverFlow/>,
        
    },
    {
        path: "/games",
        element: <Games/>,
        
    },
    {
        path: "/settings",
        element: <Settings/>,
        
    },
  
  ]);



class Screen extends React.Component{


    render(){


        return (
            <div className="screen">
                <RouterProvider router={router} />
            </div>
        )
        
    }
}




export default Screen;