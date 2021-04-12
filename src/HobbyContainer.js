import React, {useState, useEffect} from 'react'
import Hobby from "./Hobby"



const HobbyContainer = ({hobbies}) => {
    
    console.log(hobbies)
    
    const displayHobbies = hobbies.map((hobby) => {
       return<Hobby hobby={hobby}/>
    })
   
   
    return (
        [displayHobbies]
    )
}

export default HobbyContainer
