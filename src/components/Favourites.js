import React from "react";
class  Favourites extends React.Component{

   render(){
    
        return (
            <div className='Favourites' style={styles.Favourites}>
                    <img style={styles.img} src='https://c-fa.cdn.smule.com/rs-s35/arr/15/a0/4bd87e54-da45-47e2-91b5-1ff80a3cea08_1024.jpg' alt='Favourites' />
            </div>
        )
        
    }
}


const styles = {
    Favourites : {
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



export default Favourites;