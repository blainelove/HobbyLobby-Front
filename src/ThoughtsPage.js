import React, {useState} from 'react'


const ThoughtsPage = ({thought}) => {
    const[likes, setLikes] = useState(thought.likes)

    function handleLikes(){
        setLikes(likes + 1)
     }

    
      const thoughtContainer = {
        backgroundColor: "silver",
        border: "1px solid #A9A9A9",
        gridColumnStart: 1,
        gridRowStart: 1,
        display: "block",
        justifyContent: "flex-start",
        paddingTop: '5px'
    }
    const titleStyle ={
        color: "white",
        fontFamily: "Bariol",
    }
    return (
      
        <div style={thoughtContainer}>
            <h2 style={titleStyle}>{thought.description}</h2>
            <img src={thought.image} alt={thought.description}></img>
            <div>
            <button onClick={handleLikes}>{likes} likes</button>
            </div>
            
        </div>
    )
}

export default ThoughtsPage
