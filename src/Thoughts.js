import React, {useState} from 'react'

import UpdateThoughts from './UpdateThoughts'

const Thoughts = ({thought, addThought, delThought, handleUpdate, user, mystyle, titleStyle}) => {
    const isUser = thought.user_id === user
    
    const thoughtstyle = {
        color: "black",
        backgroundColor: "red",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
      };
      const thoughtContainer = {
        backgroundColor: "white",
        border: "1px solid #A9A9A9",
        gridColumnStart: 1,
        gridRowStart: 1,
        display: "block",
        justifyContent: "center",
        paddingTop: '25px'
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
            
            {(isUser) && <button class="btn btn-outline-primary" style={mystyle} onClick={handleDeleteClick}>Delete</button>}
            </div>

        </div>
    )
}

export default Thoughts
