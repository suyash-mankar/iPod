import React from "react";

class CoverFlow extends React.Component{

   render(){
        return (
            <div style={styles.coverflow}>
                <img style={styles.img} src='https://1.bp.blogspot.com/-OpnoEBQASxw/XbomQ7OYZ7I/AAAAAAAAPIg/DD6dDJrw608PEAG13Ii9DTn_SRfAEASRgCLcBGAsYHQ/s1600/3D-Coverflow-PowerPoint-Templates.gif' alt='coverflow' />
            </div>
        )   
    }
}


const styles = {
    coverflow : {
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

export default CoverFlow;