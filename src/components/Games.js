import React from "react";
class  Games extends React.Component{

   render(){
    
        return (
            <div className='games' style={styles.games}>
                    <img style={styles.img} src='https://cdn.shopify.com/s/files/1/0558/2081/products/PCC_Cyberpunk_VARIANT_Extended.jpg?v=1652138197&width=2000' alt='games' />
            </div>
        )
        
    }
}


const styles = {
    games : {
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



export default Games;