import React from "react";
import '../assets/css/Allsongs.css';

class  Allsongs extends React.Component{

    constructor(){
        super();
        // set the current time of the song and the width of the progress bar as 0 initially
        this.state={
            currentTime: 0,
            progressWidth: 0
        }
    }
    
    componentDidMount(){
        // play the song as soon as all-songs component is mounted
        const {playSong, songsList} = this.props;
        playSong(songsList);
    }

    componentWillUnmount(){
        // stop the song just before all-songs component is unmounted
        const {pauseSong, songsList} = this.props;
        pauseSong(songsList);
        
    }

    
    // function to convert the seconds in time format
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

    const {songs, songIndex, thumbnails, name} = this.props.songsList;
    const audio = songs[songIndex];

    audio.addEventListener("timeupdate", (event) => {

        // change the currentTime and progress width as the song progess
        this.setState({
            currentTime:  this.formatSecondsAsTime(audio.currentTime),
            progressWidth: (audio.currentTime/audio.duration)*100
        })   
	});


    return (
        <div className="all-songs" >
            <div className="song-details-container">
                {/* song image */}
                <img src={thumbnails[songIndex]} alt='song' />
                {/* song name */}
                <h1> {name[songIndex]}</h1>
                {/* song curent duration */}
                <p id='start'> {(this.state.currentTime)}  </p>
                {/* song total duration */}
                <p id='end'> {this.formatSecondsAsTime(audio.duration)}  </p>
            </div>

            {/* progess bar */}
            <div className="progress-container">
                <div className="progress" style={{width: `${this.state.progressWidth}%`}}></div>
            </div>
        </div>
        
    )
        
    }
}

export default Allsongs;