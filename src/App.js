
import './App.css';
import React, {useEffect, useState} from "react"
import Container from "./Container"
import AddThoughts from "./AddThoughts"
import AddHobbies from "./AddHobbies"

function App() {
  const [hobbies, setHobbies] = useState([])
  const [user, setUser] = useState(1)
  
  useEffect(() => {
    fetch("http://localhost:3000/hobbies")
    .then((r)=> r.json ())
    .then(hobbiesArray => {
      setHobbies(hobbiesArray)
    })
     
   }, [])

   function addThought(thought){
    const hobbyId = thought.hobby_id
    let hobby = [...hobbies].filter(hobby => hobby.id === hobbyId)[0]
    let allHobbies = [...hobbies].filter(hobby=> hobby.id !== hobbyId)

    hobby.thoughts = [...hobby.thoughts, thought]
    allHobbies = [...allHobbies, hobby]
    setHobbies(allHobbies)
 }

 function delThought(thought) {
  const thoughtId = thought.id
  const hobbyId = thought.hobby_id 
  let hobby = [...hobbies].filter(hobb => hobb.id === hobbyId)[0]
  
  let allHobbies = [...hobbies].filter(hobb => hobb.id !== hobbyId)
  
  hobby.thoughts=hobby.thoughts.filter(thought => thought.id !== thoughtId)
  
  allHobbies = [...allHobbies, hobby]//.sort()
  setHobbies(allHobbies) 
 }

 function handleUpdate(update) {
  const allHobbies = hobbies.map((hobby)=>{
      if (hobby.id === update.hobby_id){
          return{
              ...hobby, thoughts: hobby.thoughts.map((thought) => {
                  if (thought.id === update.id){
                      return update
                  }
                  else{
                      return thought
                  }
              })
          }
      }
      else{
          return hobby
      }
  })
  setHobbies(allHobbies)
}
  return (
    <div className="App">
      <h1>Hello</h1>
      <Container  hobbies ={hobbies} setHobbies={setHobbies} addThought={addThought} delThought={delThought} handleUpdate={handleUpdate} user={user}/>
      <AddThoughts addThought={addThought} hobbies={hobbies}/>
      <AddHobbies setHobbies= {setHobbies}/>
    </div>
  );
}

export default App;
// addHobby={addHobby} delHobby={delHobby} handleUpdate={handleUpdate}