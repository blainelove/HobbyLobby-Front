import React, {useEffect, useState} from "react"
import Favorites from "./Favorites"
import HobbyContainer from "./HobbyContainer"


const Container = ({users, delHobby}) => {
    
    
    const displayHobbies = users.map((user)=> {
        return <HobbyContainer key= {user.id} hobbies={user.hobbies} delHobby = {delHobby}/>
    })
    const displayFavorites = users.map((user)=> {
        return <Favorites key={user.id} favoirites={user.favorites}/>
    })

    


    return (
        <div>
            {displayFavorites}
            {displayHobbies}
            
        </div>
    )
}

export default Container

