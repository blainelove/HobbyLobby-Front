import React, {useState, useEffect} from 'react'
import Thoughts from "./Thoughts"

const Hobby = ({hobby}) => {
    const [display, setDisplay] = useState(false)
    
    function handleClick(){
        setDisplay(!display)
    }
    const thoughts = hobby.thoughts.map((thought) => {
        return <Thoughts key= {thought.id} thought= {thought}/>
    })
   
    return (
        <div>
           
            <h1>{hobby.name}</h1>
            <h3>{hobby.description}</h3>
            <img src={hobby.image} alt={hobby.name}></img>
            <div>
                {display ? (
             
                <button onClick={handleClick}>Hide Thoughts  </button>
                
                ) : (
                <button onClick={handleClick} >Show Thoughts</button>
                )}
            </div>
            
        </div>
    )
}

export default Hobby
