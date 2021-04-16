import React, {useState} from 'react'
import AddThoughts from './AddThoughts'
import UpdateThoughts from './UpdateThoughts'

const Thoughts = ({thought, addThought, delThought, handleUpdate, user}) => {
    const isUser = thought.user_id === user
    
    
    function handleDeleteClick(){
        fetch(`http://localhost:3000/thoughts/${thought.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
         delThought(thought)
    }
    
    return (
        <div>
            <h3>{thought.description}</h3>
            <img src={thought.image} alt={thought.description}></img>
            <div>
            
            
            <UpdateThoughts thought={thought} handleUpdate={handleUpdate} user={user} />
            
            {(isUser) && <button onClick={handleDeleteClick}>Delete</button>}
            </div>

        </div>
    )
}

export default Thoughts
