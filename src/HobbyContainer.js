import React, {useState} from 'react'
import Thoughts from "./Thoughts"
import UpdateHobby from "./UpdateHobby"
import {Link} from "react-router-dom"


const Hobby = ({hobby, delHobby, handleUpdate, updateHobby, addThought, delThought, displayUser, handleUser, user, mystyle}) => {
    
    const[display, setDisplay] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)
    const isUser = hobby.user_id === user
    const titleStyle ={
        color: "Black",
        padding: "15px",
        fontFamily: "optima, serif",
    }

    const thoughts = hobby.thoughts.map((thought) => {
        return <Thoughts key= {thought.id} thought= {thought} addThought={addThought} delThought={delThought} handleUpdate={handleUpdate} user={user} titleStyle={titleStyle}/>
    })
    

   const contentContainer = {
    color: "rgb(173, 252, 146)",
    backgroundColor: "rgb(14, 14, 82",
    border: "15px solid #f0f6f6",
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
        
        <div backgroundColor="rgb(14, 14, 82)">
            
        <h1 style={titleStyle} >{hobby.name} </h1>
       
        <h2 style={titleStyle}>{hobby.description}</h2>
        {(isUser) && <button class="bbtn btn-outline-primary"style={mystyle} onClick={handleDeleteClick}>Delete Hobby</button>}
        {(isUser) && (displayForm) && <UpdateHobby handleUpdate={handleUpdate} hobby={hobby} updateHobby={updateHobby} mystyle={mystyle}/>}
        
            {(isUser) && (displayForm) ? (
            <button class="btn btn-outline-primary"style={mystyle} onClick={handleFormToogle} >Hide Form</button>
            ) : (
            <button class="bbtn btn-outline-primary" style={mystyle}onClick={handleFormToogle} >Update Hobby</button>
            )}
        
        <img src={hobby.image}  style={mystyle}></img>
        
            <Link class="btn btn-outline-primary" style={mystyle}to = {link} padding="10px">Show Page</Link>
       
        
            
            {display ? (
            <button class="btn btn-outline-primary"style={mystyle}  marginLeft= "50px" onClick={handleClick}>Hide Thoughts  </button>
            ) : (
            <button class="btn btn-outline-primary"style={mystyle} marginLeft = "50px"  onClick={handleClick} >Show Thoughts</button>
            )}
            {(display) && (thoughts)}
            
       
       
        
       </div>
    
    )
}

export default Hobby
