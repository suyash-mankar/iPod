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
        var num = 1;

        var menuContainer = document.getElementById('menu-container');
        var activeRegion = ZingTouch.Region(menuContainer);
        activeRegion.bind(menuContainer, 'rotate', function(e) {
            currentAngle += e.detail.distanceFromLast;

            var activeElement = document.getElementsByClassName('active');
            if(currentAngle>30){
                currentAngle=0;
                activeElement[0].classList.toggle("active");
                num++;
                if(num>4){
                    num = 1;
                }
                let element = document.getElementById(`menu-item-${num}`);
                element.classList.toggle("active");
            }

            if(currentAngle<-30){
                currentAngle=0;
                activeElement[0].classList.toggle("active");
                num--;
                if(num<0){
                    num = 3;
                }
                let element = document.getElementById(`menu-item-${num+1}`);                
                element.classList.toggle("active");
               
            }

        });
    }

    render(){

        return (
            <div className='wheel'>
                <div id='outer-container'>
                    <div id='menu-container' draggable='false'>

                        <div className='menu-button' id="menu"> MENU </div>
                        <div className='menu-button' id="next"> <i className="fa-solid fa-forward-fast"></i> </div>
                        <div className='menu-button' id="prev"> <i className="fa-solid fa-backward-fast"></i> </div>
                        <div className='menu-button' id="play"> <i className="fa-solid fa-play"></i> </div>


                        <div id="center-button"> 
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

}


export default Wheel;