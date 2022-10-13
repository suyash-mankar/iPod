import React from "react";
import '../assets/css/Allsongs.css';

class  Allsongs extends React.Component{

    constructor(){
        super();
        this.state={
            currentTime: 0,
            progressWidth: 0
        }
    }
    
    componentDidMount(){
        const {playSong, songsList} = this.props;
        playSong(songsList);
    }

    componentWillUnmount(){
        const {pauseSong, songsList} = this.props;
        pauseSong(songsList);
        
    }

    

    formatSecondsAsTime = (secs, format) => {
        var hr  = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600))/60);
        var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
      
        if (min < 10){ 
          min = "0" + min; 
        }
        if (sec < 10){ 
          sec  = "0" + sec;
        }
      
        return min + ':' + sec;
    }


   render(){

    
    const { songsList, updateProgress, progressRef } = this.props;
    const {songs, songIndex, thumbnails, name} = songsList;
    const audio = songs[songIndex];

    audio.addEventListener("timeupdate", (event) => {
        this.setState({
            currentTime:  this.formatSecondsAsTime(audio.currentTime),
            progressWidth: (audio.currentTime/audio.duration)*100
        })   
	});


    return (
        <div className="all-songs" >
            <div className="song-details-container">
                <img src={thumbnails[songIndex]} alt='song' />
                <h1> {name[songIndex]}</h1>
                <p id='start'> {(this.state.currentTime)}  </p>
                <p id='end'> {this.formatSecondsAsTime(audio.duration)}  </p>

            </div>
            <div className="progress-container">
                <div className="progress" ref={progressRef} style={{width: `${this.state.progressWidth}%`}}></div>
            </div>
        </div>
        
    )
        
    }
}




export default Allsongs;