import React, {useEffect, useState} from "react"
import Favorites from "./Favorites"
import HobbyContainer from "./HobbyContainer"
import {Switch, Route, BrowserRouter, NavLink} from "react-router-dom"


const Container = ({ handleUpdate, hobbies, setHobbies, addThought, delThought, user, mystyle}) => {
    const [displayUser, setDisplayUser] = useState(false)
    function handleUser(hobby){
        console.log(hobby)
        if (user === hobby.user_id){
            (setDisplayUser(!displayUser))
            return(displayUser)
        }
        else{
            return (displayUser)
        }
    }      
    function delHobby(id) {
        const byeHobby = hobbies.filter((hobby) => hobby.id !== id)
        setHobbies(byeHobby)
    }
    function updateHobby(upid) {
        const allHobbies = hobbies.map((hobb) => {
          if (hobb.id === upid.id){
              return upid
          }
          else{
              return hobb
          }
        })
        setHobbies(allHobbies)
    }
    
    const displayHobbies = hobbies.map((hobby)=> {
        return <HobbyContainer key= {hobby.id} hobby={hobby} delHobby={delHobby} updateHobby={updateHobby} addThought={addThought} delThought={delThought} handleUpdate={handleUpdate} user={user} handleUser={handleUser} displayUser={displayUser} mystyle={mystyle}/>
    })
    

    


    return (
        <div>
           
            {displayHobbies}
            
            
        </div>
    )
}

export default Container

