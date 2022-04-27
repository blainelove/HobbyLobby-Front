import React, {useState} from 'react'


const ThoughtsPage = ({thought}) => {
    const[likes, setLikes] = useState(thought.likes)

    function handleLikes(){
        setLikes(likes + 1)
     }
     
     const mystyle = {
        color: "Black",
        backgroundColor: "emrald",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center",
        borderRadius: "15px",
        borderollapse: "separate",
        marginRight: "20px"
      };
      const thoughtContainer = {
        backgroundColor: "white",
        border: "1px solid #A9A9A9",
        gridColumnStart: 1,
        gridRowStart: 1,
        display: "block",
        justifyContent: "flex-start",
        paddingTop: '15px'
    }
    const titleStyle ={
        color: "Black",
        fontFamily: "Bariol",
    }
    return (
      
        <div style={thoughtContainer}>
            <h2 style={titleStyle}>{thought.description}</h2>
            <img src={thought.image} alt={thought.description}></img>
            <div>
            <button class="btn btn-outline-primary" style={mystyle} onClick={handleLikes}>{likes} likes</button>
            </div>
            
        </div>
    )
}

export default ThoughtsPage
