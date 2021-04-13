import React, {useState} from 'react'
import AddThoughts from './AddThoughts'
import UpdateThoughts from './UpdateThoughts'

const Thoughts = ({thought, addThought, delThought, handleUpdate}) => {
    
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
            <p>{thought.likes}</p>
            <UpdateThoughts thought={thought} handleUpdate={handleUpdate}/>
            <button onClick={handleDeleteClick}>Delete</button>
            

        </div>
    )
}

export default Thoughts
