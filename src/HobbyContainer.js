import React, {useState, useEffect} from 'react'
import Hobby from "./Hobby"



const HobbyContainer = ({hobbies, delHobby}) => {
    
    console.log(hobbies)
    
    const displayHobbies = hobbies.map((hobby) => {
       return<Hobby hobby={hobby} delHobby ={delHobby}/>
    })
   
   
    return (
        [displayHobbies]
    )
}

export default HobbyContainer
