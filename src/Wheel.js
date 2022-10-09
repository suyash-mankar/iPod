import React from "react";
import ZingTouch from 'zingtouch';
import './Wheel.css'

class Wheel extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }


    componentDidMount(){

        var currentAngle = 0;

        var menuContainer = document.getElementById('menu-container');
        var activeRegion = ZingTouch.Region(menuContainer);
        activeRegion.bind(menuContainer, 'rotate', function(e) {
            currentAngle += e.detail.distanceFromLast;
            console.log('rotating');
        
           
        });

       


    }

    render(){

        return (
            <div className='wheel'>
                <div id='outer-container'>
                    <div id='menu-container'>
                        <div id="center-button"> </div> 
                    </div>
                </div>
            </div>
        )
    }

}


export default Wheel;