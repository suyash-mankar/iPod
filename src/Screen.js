import React from "react";
import Home from './Home';
import CoverFlow from './CoverFlow';
import Music from './Music';
import Settings from './Settings';
import Games from './Games';


import './Screen.css'

class Screen extends React.Component{

    render(){

        const {home, coverFlow, music, games, settings} = this.props.state;

        if(home){
            return (
                <div className='screen'>
                        <Home /> 
                </div>
            )  
        }
        
        
        else if(coverFlow){
            return (
                <div className='screen'>
                        <CoverFlow /> 
                </div>
            )  
        }
        else if(music){
            return (
                <div className='screen'>
                        <Music /> 
                </div>
            )  
        }
        else if(games){
            return (
                <div className='screen'>
                        <Games /> 
                </div>
            )  
        }
        else if(settings){
            return (
                <div className='screen'>
                        <Settings /> 
                </div>
            )  
        }

        
        
    }
}




export default Screen;