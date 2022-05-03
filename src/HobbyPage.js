import React,{useEffect, useState} from 'react'
import './App.css';
import { useParams } from "react-router-dom";
import ThoughtsPage from "./ThoughtsPage"

const HobbyPage = () => {
    const[hobby, setHobby] = useState(null)
    const[display, setDisplay] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)
    const params = useParams()
   
    

    const id = params.id
    const mystyle = {
        color: "rgb(173, 252, 146)",
        backgroundColor: "rgb(14, 14, 82)",
        
        padding: "10px",
        fontFamily: "Georgia",
        textAlign: "center",
        borderRadius: "15px",
        borderollapse: "separate",
        marginRight: "20px"
      };

   const contentContainer = {
    backgroundColor: "f0f6f6",
    border: "15px solid rgb(155, 243, 240)",
    borderRadius: "15px",
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
        color: "1768ac",
        
        fontFamily: "optima, serif",
    }
    const thoughtsPage = hobby && hobby.thoughts.map((thought) => 
        {return <ThoughtsPage key= {thought.id} thought= {thought} description={thought.description} titleStyle={titleStyle}/>})
          
    
    

    function handleClick(){
        setDisplay(!display)
    }
   
   
        
          
        
    return (
        <div style= {contentContainer}>
        
        <div >
   
        {/* <h1 style={titleStyle}>{hobby && hobby.name}</h1> */}
        <h1 style={titleStyle}>{hobby && hobby.name}</h1>
       
        <h2 style={titleStyle}>{hobby && hobby.description}</h2> 
        <img style={mystyle} src={hobby && hobby.image} ></img> 
        </div>
       
        <div marginTop = "50px">
            
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
