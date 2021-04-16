import React, {useState} from 'react'
import Thoughts from "./Thoughts"
import UpdateHobby from "./UpdateHobby"


const Hobby = ({hobby, delHobby, handleUpdate, updateHobby, addThought, delThought, displayUser, handleUser, user}) => {
    
    const[display, setDisplay] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)
    const isUser = hobby.user_id === user
    
    const thoughts = hobby.thoughts.map((thought) => {
        return <Thoughts key= {thought.id} thought= {thought} addThought={addThought} delThought={delThought} handleUpdate={handleUpdate} user={user}/>
    })
    

 
    

    function handleClick(){
        setDisplay(!display)
    }
    function handleFormToogle(){
        setDisplayForm(!displayForm)
   }
    function handleDeleteClick(){
        fetch(`http://localhost:3000/hobbies/${hobby.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
         delHobby(hobby.id)
    }
    return (
        <div>
        
        <h1>{hobby.name}</h1>
       
        <h3>{hobby.description}</h3>
        <img src={hobby.image} ></img>
        <div>
            
            {display ? (
            <button onClick={handleClick}>Hide Thoughts  </button>
            ) : (
            <button onClick={handleClick} >Show Thoughts</button>
            )}
            {(display) && (thoughts)}
            <div>
            
            {(isUser) && (displayForm) ? (
            <button onClick={handleFormToogle} >Hide Form</button>
            ) : (
            <button onClick={handleFormToogle} >Update Hobby</button>
            )}
          
          
            {(isUser) && (displayForm) && <UpdateHobby handleUpdate={handleUpdate} hobby={hobby} updateHobby={updateHobby}/>}
            </div>
            
        </div>
       {(isUser) && <button onClick={handleDeleteClick}>Delete</button>}
        
        
    </div>
    )
}

export default Hobby
