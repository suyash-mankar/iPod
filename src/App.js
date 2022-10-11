import Wheel from './Wheel';
import React from 'react';
import ZingTouch from 'zingtouch';
import Screen from './Screen';





class App extends React.Component {





  constructor(){
    super();
    this.state = {
      activeElementName : 'coverflow'
    }
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
      
        <Screen  />
        <Wheel  activeElementName={this.state.activeElementName} />
              
      </div>
    );
  }
  
}

export default App;
