import React from "react";
class  Albums extends React.Component{

   render(){
    
        return (
            <div className='Albums' style={styles.Albums}>
                    <img style={styles.img} src='https://live.staticflickr.com/8044/8114076425_05eff08268_z.jpg' alt='Albums' />
            </div>
        )
        
    }
}


const styles = {
    Albums : {
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



export default Albums;