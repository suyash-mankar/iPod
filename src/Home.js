import React from "react";
import './Home.css'


class Home extends React.Component{

    
    
    render(){

        return (
            <div className='home'>

                <h1> iPod.js </h1>
                <ul id='menu-items'> 
                    <li id='menu-item-1' name='coverFlow' className='active'>
                        <span> Cover Flow </span>  
                        <span> <i className="fa-solid fa-arrow-right"></i> </span>
                    </li>
                    <li id='menu-item-2' name='music'>
                        <span> Music </span>
                        <span> <i className="fa-solid fa-arrow-right"></i> </span>
                        <i className="fa-solid fa-arrow-right"></i> 
                    </li>
                    <li id='menu-item-3' name='games'>
                        <span> Games </span>
                        <span> <i className="fa-solid fa-arrow-right"></i> </span>
                    </li>
                    <li id='menu-item-4' name='settings'>
                        <span> Settings </span>
                        <span> <i className="fa-solid fa-arrow-right"></i> </span>
                    </li>

                
                </ul>

            </div>
        )
    }
}


export default Home;