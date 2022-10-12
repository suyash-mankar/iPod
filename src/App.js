import Wheel from './Wheel';
import React from 'react';
import ZingTouch from 'zingtouch';
import Home from './Home';
import CoverFlow from './CoverFlow';
import Music from './Music';
import Settings from './Settings';
import Games from './Games';
import Allsongs from './Allsongs';
import song from "./perfect.mp3";

import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends React.Component {


  constructor(){
    super();
    this.state = {
      activeElementName : 'coverflow',
      audio: new Audio(song),
      isPlaying: false,
    }
  }


  // playSong = ()=>{
  //   this.state.audio.play();
  // }


  playPause = () => {

    this.state.audio.pause();

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };


  changeStateToHome = ()=>{
    
    this.setState({
      activeElementName: 'coverflow',
    })
  }

  changeStateToMusic = ()=>{
    
    this.setState({
      activeElementName: 'all-songs',
    })
  }

  componentDidMount(){


    var changeState = () => {

      let activeElementName = document.getElementsByClassName('active')[0].getAttribute('name');

      this.setState({
        activeElementName
      })
    }

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
            changeState();
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
            changeState();
           
        }

    });
  }

 

  render(){

    return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<> <Home changeStateToHome= {this.changeStateToHome} /> <Wheel activeElementName={this.state.activeElementName}  /> </>} />
            <Route path="/music" element={<> <Music changeStateToMusic= {this.changeStateToMusic} /> <Wheel activeElementName={this.state.activeElementName}  /> </>} />
            <Route path="/settings" element={<> <Settings /> <Wheel activeElementName={this.state.activeElementName} /> </>} />
            <Route path="/games" element={<> <Games /> <Wheel activeElementName={this.state.activeElementName}  /> </>} />
            <Route path="/coverflow" element={<> <CoverFlow /> <Wheel activeElementName={this.state.activeElementName}  /> </>} />
            <Route path="/all-songs" element={<> <Allsongs /> <Wheel activeElementName={this.state.activeElementName} playPause={this.playPause} /> </>} />

          </Routes>
        </BrowserRouter>
    
      </div>
    );
  }
  
}

export default App;
