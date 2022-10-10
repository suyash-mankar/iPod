import React from "react";
import './Screen.css'


class Screen extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){

        

    }

    render(){

        return (
            <div className='screen'>

                <h1> iPod.js </h1>
                <ul id='menu-items'> 
                    <li id='menu-item-1' className='active'>
                        <span> Cover Flow </span>  
                        <span> <i className="fa-solid fa-arrow-right"></i> </span>
                    </li>
                    <li id='menu-item-2'>
                        <span> Music </span>
                        <span> <i className="fa-solid fa-arrow-right"></i> </span>
                    </li>
                    <li id='menu-item-3'>
                        <span> Games </span>
                        <span> <i className="fa-solid fa-arrow-right"></i> </span>
                    </li>
                    <li id='menu-item-4'>
                        <span> Settings </span>
                        <span> <i className="fa-solid fa-arrow-right"></i> </span>
                    </li>

                
                </ul>

            </div>
        )
    }
}


export default Screen;