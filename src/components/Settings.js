import React from "react";
class  Settings extends React.Component{


    render(){

        return (
            <div style={styles.settings}>
                    <img style={styles.img} src='https://img.freepik.com/free-vector/setting-gear-vector-technology-icon-gold-gradient-background_53876-114062.jpg?w=360' alt='settings' />
            </div>
        )
        
    }
}


const styles = {
    settings : {
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



export default Settings;