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
    backgroundColor: "AntiqueWhite",
    border: "15px solid #A9A9A9",
    gridColumnStart: 1,
    gridRowStart: 1,
    display: "block",
    justifyContent: "flex-start",
    paddingTop: '15px'
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
        color: "Black",
        fontFamily: "Bariol",
    }
    const thoughtsPage = hobby && hobby.thoughts.map((thought) => 
        {return <ThoughtsPage key= {thought.id} thought= {thought} description={thought.description} titleStyle={titleStyle}/>})
          
    
    

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
            <button class="btn btn-outline-primary"style={mystyle} onClick={handleClick}>Hide Thoughts  </button>
            ) : (
            <button class="btn btn-outline-primary"style={mystyle} onClick={handleClick} >Show Thoughts</button>
            )}
            <div>
            {(display) && (thoughtsPage)}
            </div>
            
          
          
            </div>
        </div>
    
    )
}

export default HobbyPage
