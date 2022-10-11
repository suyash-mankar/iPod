import Wheel from './Wheel';
import Screen from './Screen';
import React from 'react';
import ZingTouch from 'zingtouch';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      home: true,
      coverFlow: false,
      music: false,
      games: false,
      settings: false,
      
    }
  }



  handleClick = () => {
    var activeElement = document.getElementsByClassName('active');
    var activeMenuItem = activeElement[0].getAttribute("name");
    
    if(activeMenuItem === "coverFlow"){
      this.setState({
        home : false,
        coverFlow : true
      })
    }

    else if(activeMenuItem === "music"){
      this.setState({
        home : false,
        music : true
      })
    }

    else if(activeMenuItem === "games"){
      this.setState({
        home : false,
        games : true
      })
    }

    else if(activeMenuItem === "settings"){
      this.setState({
        home : false,
        settings : true
      })
    }  
    
  }


  handleMenuButton = () => {
    this.setState({
      home : true,
    })
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
      <div className="App">
  
        <Screen state={this.state} />      
        <Wheel onHandleClick={this.handleClick} onHandleMenuButton = {this.handleMenuButton} num={this.state.num} />
  
      </div>
    );
  }
  
}

export default App;
