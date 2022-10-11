import React from "react";
import Home from './Home';
import './Screen.css'

class Screen extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){

        return (
            <div className='screen'>
                 <Home /> 
            </div>
        )
    }
}




export default Screen;