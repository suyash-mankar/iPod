import React from "react";
class  Artists extends React.Component{

   render(){
    
        return (
            <div className='Artists' style={styles.Artists}>
                    <img style={styles.img} src='https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium-5/ed-sheeran-and-song-titles-tony-rubino.jpg' alt='Artists' />
            </div>
        )
        
    }
}


const styles = {
    Artists : {
        boxSizing: "border-box",
        height: 301.5,
        width: 350,
        position: 'absolute',
        top: "10%",
        left: "50%",
        transform: 'translateX(-150px)',
        display: 'flex',
        borderRadius: '50px 50px 0px 0px',
        boxShadow: '5px 20px 30px 10px grey',
    
    },
    
    img : {
        borderRadius: "50px 50px 0 0",
        width: "350px",
        objectFit: 'cover',

    }
}



export default Artists;