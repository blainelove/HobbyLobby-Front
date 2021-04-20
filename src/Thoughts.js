import React, {useState} from 'react'
import AddThoughts from './AddThoughts'
import UpdateThoughts from './UpdateThoughts'

const Thoughts = ({thought, addThought, delThought, handleUpdate, user, mystyle, titleStyle}) => {
    const isUser = thought.user_id === user
    
    const thoughtstyle = {
        color: "white",
        backgroundColor: "red",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
      };
      const thoughtContainer = {
        backgroundColor: "silver",
        border: "1px solid #A9A9A9",
        gridColumnStart: 1,
        gridRowStart: 1,
        display: "block",
        justifyContent: "flex-start",
        paddingTop: '5px'
    }
     

    function handleDeleteClick(){
        fetch(`http://localhost:3000/thoughts/${thought.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
         delThought(thought)
    }
    
    return (
        <div style={thoughtContainer}>
            <h2 style={titleStyle}>{thought.description}</h2>
            <img src={thought.image} alt={thought.description}></img>
            <div>
            
            
            <UpdateThoughts thought={thought} handleUpdate={handleUpdate} user={user} thoughtstyle={thoughtstyle} mystyle={mystyle}/>
            
            {(isUser) && <button style={mystyle} onClick={handleDeleteClick}>Delete</button>}
            </div>

        </div>
    )
}

export default Thoughts
