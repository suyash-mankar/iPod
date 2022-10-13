import React from "react";
import '../assets/css/Wheel.css';
import { Link } from "react-router-dom";


  class Wheel extends React.Component{
   
    render(){

        if(this.props.currentScreen === 'all-songs'){
            var {playPause, nextSong, prevSong, songsList} = this.props;
        }
        
        return (

            <div className='wheel'>
                <div id='screen-container'>    
                </div>

                <div id='outer-container'>
                        <div id='menu-container' draggable='false'>

                            <div className='menu-button' id="menu"  >  
                            <Link to={`/`}>
                                MENU
                            </Link> 
                            </div>
                            <div className='menu-button' id="next" onClick={()=>{nextSong(songsList)}} > <i className="fa-solid fa-forward-fast"></i> </div>
                            <div className='menu-button' id="prev" onClick={()=>{prevSong(songsList)}} > <i className="fa-solid fa-backward-fast"></i> </div>
                            <div className='menu-button' id="play" onClick={()=>{playPause(songsList)}}> <i className="fa-solid fa-play"></i> </div>

                            <Link to={`/${this.props.activeElementName}`}>
                                <div id="center-button">
                                </div>                                       
                            </Link>
                                
                        </div>
                </div>        
            </div>
        )
    }
}





export default Wheel;