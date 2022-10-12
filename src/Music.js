import React from "react";
import './Music.css'


class Music extends React.Component{

    componentDidMount(){

        var changeStateToMusic = this.props.changeStateToMusic;
        changeStateToMusic();
         
        
    }
    
    render(){

       return (
        <div className='music'>

        <div className="menu-items-container">

            <h1> iPod.js </h1>
            <ul id='menu-items'> 
                <li id='menu-item-1' name='all-songs' className='active'>
                    <span> All Songs </span>  
                    <span> <i className="fa-solid fa-caret-right"></i> </span>
                </li>
                <li id='menu-item-2' name='artists'>
                    <span> Artists </span>
                    <span> <i className="fa-solid fa-caret-right"></i> </span>
                </li>
                <li id='menu-item-3' name='albums'>
                    <span> Albums </span>
                    <span> <i className="fa-solid fa-caret-right"></i> </span>
                </li>
                <li id='menu-item-4' name='favourites'>
                    <span> Favourites </span>
                    <span> <i className="fa-solid fa-caret-right"></i> </span>
                </li>
            </ul>


        </div>

        <div className="wallpaper">
            <img src="https://wallpapercave.com/wp/wp6118722.jpg" /> 
        </div>

        

    </div>
        )      
    }
}

export default Music;