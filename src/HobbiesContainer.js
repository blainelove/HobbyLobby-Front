import React, {useEffect, useState} from "react"
import Favorites from "./Favorites"
import Hobby from "./Hobby"


const HobbiesContainer = () => {
    const [hobbies, setHobbies] = useState([])
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/hobbies")
        .then((r)=> r.json ())
        .then(hobbyArray => {
          setHobbies(hobbyArray)
        })
       }, [])
       useEffect(() => {
        fetch("http://localhost:3000/favorites")
        .then((r)=> r.json ())
        .then(favoritesArray => {
          setFavorites(favoritesArray)
        })
       }, [])

    const hobbyComponents = hobbies.map((hobby) => {
        return <Hobby key={hobby.id} hobby= {hobby}/>
    })

    return (
        <div>
            <Favorites favorites= {favorites}/>
            {hobbyComponents}
        </div>
    )
}

export default HobbiesContainer

