import React from "react";
import './Wheel.css'

class Wheel extends React.Component{
  
    render(){

         return (
            <div className='wheel'>
                <div id='screen-container'>
                    
                </div>

                <div id='outer-container'>
                        <div id='menu-container' draggable='false'>

                                <div className='menu-button' id="menu" onClick={this.props.onHandleMenuButton}> MENU </div>
                                <div className='menu-button' id="next"> <i className="fa-solid fa-forward-fast"></i> </div>
                                <div className='menu-button' id="prev"> <i className="fa-solid fa-backward-fast"></i> </div>
                                <div className='menu-button' id="play"> <i className="fa-solid fa-play"></i> </div>

                                <div id="center-button" onClick={this.props.onHandleClick}> 
                            </div> 
                        </div>
                </div>

                
            </div>
        )
    }

}


export default Wheel;