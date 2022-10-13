import React from "react";
import '../assets/css/Allsongs.css';

class  Allsongs extends React.Component{
    
    componentDidMount(){
        const {playPause, songsList} = this.props;
            playPause(songsList);
    }

    componentWillUnmount(){
        const {playPause, songsList} = this.props;
            playPause(songsList);
    }

   render(){

    
    const { songsList, updateProgress, progressRef } = this.props;
    const {songs, songIndex, thumbnails} = songsList;
    const audio = songs[songIndex];

    audio.addEventListener("timeupdate", (event) => {
		updateProgress(event);
	});


        return (
            <div className="all-songs" >
                <div className="image-container">
                    <img src={thumbnails[songIndex]} />
                </div>
                <div className="progress-container">
                    <div className="progress" ref={progressRef}></div>
                </div>
            </div>
            
        )
        
    }
}




export default Allsongs;