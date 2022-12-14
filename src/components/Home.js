import React from "react";
import '../assets/css/Home.css'


class Home extends React.Component{

    componentDidMount(){

        // change the active element in App component state to coverflow as soon as home component is mounted
        var changeStateToHome = this.props.changeStateToHome;
        changeStateToHome();

        // var menuButton = document.getElementById("menu");
        // menuButton.onclick = function(event) {
        //     // change the active element in App component state to coverflow when menu button is clicked
        //     changeStateToHome();
         
        // }
    }
    
    render(){

        return (
            <div className='home'>

                <div className="menu-items-container">

                    <h1> iPod.js </h1>
                    <ul id='menu-items'> 
                        <li id='menu-item-1' name='coverFlow' className='active'>
                            <span> Cover Flow </span>  
                            <span> <i className="fa-solid fa-caret-right"></i> </span>
                        </li>
                        <li id='menu-item-2' name='music'>
                            <span> Music </span>
                            <span> <i className="fa-solid fa-caret-right"></i> </span>
                        </li>
                        <li id='menu-item-3' name='games'>
                            <span> Games </span>
                            <span> <i className="fa-solid fa-caret-right"></i> </span>
                        </li>
                        <li id='menu-item-4' name='settings'>
                            <span> Settings </span>
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


export default Home;