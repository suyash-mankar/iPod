import React from 'react';
import ZingTouch from 'zingtouch';
//importing all the components
import Wheel from './Wheel';
import Home from './Home';
import CoverFlow from './CoverFlow';
import Music from './Music';
import Settings from './Settings';
import Games from './Games';
import Artists from './Artists';
import Albums from './Albums';
import Favourites from './Favourites';
import Allsongs from './Allsongs';
// importing songs from assets
import songs from "../assets/songs/songs";
// using react-router for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends React.Component {

	// Constructor for initialization of State
  constructor(){
    super();

    const song1 = new Audio(songs.song1);
		const song2 = new Audio(songs.song2);
		const song3 = new Audio(songs.song3);

    this.state = {
      // the element which is being highlighted/active by default
      activeElementName : 'coverflow',
      // details of the songs
      songsList: {
				songs: [song1, song2, song3],
				thumbnails: [	
        "https://m.media-amazon.com/images/M/MV5BMGU5YTRjMTUtZDU4Mi00NjFlLWExYTAtMjVkN2JmOTE1Y2Q2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
        "https://i1.sndcdn.com/artworks-4ngu2T8sEGWEfas6-luktdQ-t500x500.jpg",
        "https://i1.sndcdn.com/artworks-3fNzGvRsSWqvT6KZ-T3fvqg-t500x500.jpg"
      ],
				songIndex: 0,
				name: ["Perfect", "Lovely", "Drivers License"],
				isPlaying: false,
			},
    }
  }

  // function to pause the song
	// Gets called when we come out of the all-songs section
  pauseSong = (songsList) => {

    const { songIndex } = songsList;
    songsList.isPlaying = false;
    songsList.songs[songIndex].pause();
    this.setState({ songsList });
  
  };

  // function to play the song
	// Gets called when we enter the all-songs section
  playSong = (songsList) => {

    const { songIndex } = songsList;
    songsList.isPlaying = true;
    songsList.songs[songIndex].play();
    this.setState({ songsList });
  
  };

  // function to switch between play and pause
	// Gets called when we press the Play/Pause Button to Play-Pause the Song
  playPause = (songsList) => {
    if (songsList.isPlaying) {
        this.pauseSong(songsList);
    } else {
        this.playSong(songsList);
    }
  };


  // Gets called when we Press the Next Button for the Next Song
  nextSong = (songsList) => {
		
			songsList.songs.map((song) => {
				song.pause();
				song.currentTime = 0;
				return [];
			});
			songsList.isPlaying = false;
			songsList.songIndex += 1;
			if (songsList.songIndex > songsList.songs.length - 1) {
				songsList.songIndex = 0;
			}
			songsList.songs[songsList.songIndex].play();
			songsList.isPlaying = true;
			this.setState({ songsList });
		
	};


	// Gets called when we Press the Previous Button for the Previous Song
  prevSong = (songsList) => {
		
			songsList.songs.map((song) => {
				song.pause();
				song.currentTime = 0;
				return [];
			});
			songsList.isPlaying = false;
			songsList.songIndex -= 1;
			if (songsList.songIndex < 0) {
				songsList.songIndex = songsList.songs.length - 1;
			}
			songsList.songs[songsList.songIndex].play();
			songsList.isPlaying = true;
			this.setState({ songsList });
		
	};


  // change the active element in state to coverflow
  // gets called when we render home
  changeStateToHome = ()=>{
    
    this.setState({
      activeElementName: 'coverflow',
    })
  }

  // change the active element in state to all-songs
  // gets called when we render music
  changeStateToMusic = ()=>{
    
    this.setState({
      activeElementName: 'all-songs',
    })
  }


  componentDidUpdate(){


    // function to set the active element in state to the element having the active class
    var changeState = () => {
      // get the element having the active class
      let activeElementName = document.getElementsByClassName('active')[0].getAttribute('name');
      this.setState({
        activeElementName
      })
    }


    // functionality to change the menu by rotating the wheel
    var currentAngle = 0;
    var num = 1;

    var menuContainer = document.getElementById('menu-container');
    var activeRegion = ZingTouch.Region(menuContainer);
    activeRegion.bind(menuContainer, 'rotate', function(e) {
        currentAngle += e.detail.distanceFromLast;
        var activeElement = document.getElementsByClassName('active');
        
        // if the wheel is rotated clockwise
        if(currentAngle>30){
            currentAngle=0;
            // remove the active class from the current menu
            activeElement[0].classList.toggle("active");
           
            num++;
            if(num>4){
                num = 1;
            }

            // set the active class to the next menu
            let element = document.getElementById(`menu-item-${num}`);
            element.classList.toggle("active");
            changeState();
        }

        // if the wheel is rotated anti-clockwise
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

 
	// Renders the App Component
  render(){

    return (
      <div className="App">

        {/* set the routes for different components */}
        <BrowserRouter>
          <Routes>

            <Route path="/" 
              element={<> 
                <Home changeStateToHome= {this.changeStateToHome} /> 
                <Wheel  activeElementName={this.state.activeElementName}  /> </>} 
            />
            <Route path="/music" 
                element={<> <Music changeStateToMusic= {this.changeStateToMusic} /> 
                <Wheel  activeElementName={this.state.activeElementName}  /> </>} 
            />
            <Route path="/settings" 
                element={<> <Settings /> 
                <Wheel activeElementName={this.state.activeElementName} /> </>} 
            />
            <Route path="/games" 
                element={<> <Games /> 
                <Wheel activeElementName={this.state.activeElementName}  /> </>} 
            />
            <Route path="/artists" 
                element={<> <Artists /> 
                <Wheel activeElementName={this.state.activeElementName}  /> </>} 
            />
            <Route path="/albums" 
                element={<> <Albums /> 
                <Wheel activeElementName={this.state.activeElementName}  /> </>} 
            />
            <Route path="/favourites" 
                element={<> <Favourites /> 
                <Wheel activeElementName={this.state.activeElementName}  /> </>} 
            />
            <Route path="/coverflow" 
                element={<> <CoverFlow /> 
                <Wheel activeElementName={this.state.activeElementName}  /> </>} 
            />
            <Route path="/all-songs" 
            element={<> <Allsongs 
                songsList={this.state.songsList} 
                pauseSong={this.pauseSong} 
                playSong={this.playSong} /> 
              <Wheel 
                currentScreen={'all-songs'} 
                activeElementName={this.state.activeElementName} 
                playPause={this.playPause} 
                pauseSong={this.pauseSong} 
                playSong={this.playSong} 
                songsList={this.state.songsList} 
                nextSong={this.nextSong} 
                prevSong={this.prevSong} /> </>}  
              />
          </Routes>
        </BrowserRouter>
    
      </div>
    );
  }
  
}

export default App;
