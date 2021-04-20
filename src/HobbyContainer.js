import React, {useState} from 'react'
import Thoughts from "./Thoughts"
import UpdateHobby from "./UpdateHobby"
import {Link} from "react-router-dom"


const Hobby = ({hobby, delHobby, handleUpdate, updateHobby, addThought, delThought, displayUser, handleUser, user, mystyle}) => {
    
    const[display, setDisplay] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)
    const isUser = hobby.user_id === user
    const titleStyle ={
        color: "white",
        fontFamily: "Bariol",
    }
    
    const thoughts = hobby.thoughts.map((thought) => {
        return <Thoughts key= {thought.id} thought= {thought} addThought={addThought} delThought={delThought} handleUpdate={handleUpdate} user={user} titleStyle={titleStyle}/>
    })
    

   const contentContainer = {
    backgroundColor: "grey",
    border: "15px solid #A9A9A9",
    gridColumnStart: 1,
    gridRowStart: 1,
    display: "block",
    justifyContent: "flex-start",
    paddingTop: '5px'
}
 
    
    

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
    const link = `/container/${hobby.id}`
    return (
        <div style= {contentContainer}>
        
        <h1 style={titleStyle}>{hobby.name}</h1>
       
        <h2 style={titleStyle}>{hobby.description}</h2>
        <img src={hobby.image} ></img>
        <p>
            <Link style={mystyle}to= {link}>Show Page</Link>
        </p>
        <div>
            
            {display ? (
            <button style={mystyle} onClick={handleClick}>Hide Thoughts  </button>
            ) : (
            <button style={mystyle} onClick={handleClick} >Show Thoughts</button>
            )}
            {(display) && (thoughts)}
            <div>
            
            {(isUser) && (displayForm) ? (
            <button style={mystyle} onClick={handleFormToogle} >Hide Form</button>
            ) : (
            <button style={mystyle} onClick={handleFormToogle} >Update Hobby</button>
            )}
          
          
            {(isUser) && (displayForm) && <UpdateHobby handleUpdate={handleUpdate} hobby={hobby} updateHobby={updateHobby} mystyle={mystyle}/>}
            </div>
            
        </div>
       {(isUser) && <button style={mystyle}onClick={handleDeleteClick}>Delete</button>}
        
        
    </div>
    )
}

export default Hobby
