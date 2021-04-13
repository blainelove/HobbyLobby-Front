import React, {useEffect, useState} from "react"
import Favorites from "./Favorites"
import HobbyContainer from "./HobbyContainer"


const Container = ({ handleUpdate, hobbies, setHobbies, addThought, delThought}) => {
    
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
        return <HobbyContainer key= {hobby.id} hobby={hobby} delHobby={delHobby} updateHobby={updateHobby} addThought={addThought} delThought={delThought} handleUpdate={handleUpdate}/>
    })
    

    


    return (
        <div>
           
            {displayHobbies}
            
        </div>
    )
}

export default Container

