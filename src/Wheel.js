import React from "react";
import './Wheel.css';
import { Outlet, Link } from "react-router-dom";


  class Wheel extends React.Component{


    render(){

            // console.log(this.props.activeElementName);

            return (
    
                <div className='wheel'>
                    <div id='screen-container'>
                        
                    </div>
    
                    <div id='outer-container'>
                            <div id='menu-container' draggable='false'>
    
                                    <div className='menu-button' id="menu"  >  
                                    <Link to={`/`}>
                                       {/* <a href='/'> MENU </a>   */}
                                       MENU
                                    </Link> 
                                    </div>
                                    <div className='menu-button' id="next"> <i className="fa-solid fa-forward-fast"></i> </div>
                                    <div className='menu-button' id="prev"> <i className="fa-solid fa-backward-fast"></i> </div>
                                    <div className='menu-button' id="play" onClick={this.props.playPause}> <i className="fa-solid fa-play"></i> </div>
    
                                    <Link to={`/${this.props.activeElementName}`}>

                                    {/* <a href={`/${this.props.activeElementName}`}> */}
                                        <div id="center-button">
                                        </div>
                                    {/* </a> */}
                                        
                                    </Link>
                                    
                            </div>
                    </div>        
                </div>
            )
     
        
        
    }
}





export default Wheel;