import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import ThoughtsPage from "./ThoughtsPage"

const HobbyPage = ({ mystyle}) => {
    const[hobby, setHobby] = useState(null)
    const[display, setDisplay] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)
    const params = useParams()
   
    

    const id = params.id

   const contentContainer = {
    backgroundColor: "grey",
    border: "15px solid #A9A9A9",
    gridColumnStart: 1,
    gridRowStart: 1,
    display: "block",
    justifyContent: "flex-start",
    paddingTop: '5px'
}

    useEffect(()=>{
        fetch(`http://localhost:3000/hobbies/${id}`)
        .then((r) => r.json())
        .then((hobby)=> {
            setHobby(hobby)
            console.log(hobby)
        })
    }, [id])
    
    
    const titleStyle ={
        color: "white",
        fontFamily: "Bariol",
    }
    const thoughtsPage = hobby && hobby.thoughts.map((thought) => 
        {return <ThoughtsPage key= {thought.id} thought= {thought} titleStyle={titleStyle}/>})
          
    
    

    function handleClick(){
        setDisplay(!display)
    }
   
  
    return (
        
        <div style= {contentContainer}>
        
        <h1 style={titleStyle}>{hobby && hobby.name}</h1>
       
        <h2 style={titleStyle}>{hobby && hobby.description}</h2> 
        <img src={hobby && hobby.image} ></img> 
        <div>
            
            {display ? (
            <button style={mystyle} onClick={handleClick}>Hide Thoughts  </button>
            ) : (
            <button style={mystyle} onClick={handleClick} >Show Thoughts</button>
            )}
            <div>
            {(display) && (thoughtsPage)}
            </div>
            
          
          
        </div>
    </div>
    )
}

export default HobbyPage
