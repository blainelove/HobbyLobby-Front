
import './App.css';
import React, {useEffect, useState} from "react"
import {Switch, Route, BrowserRouter, NavLink} from "react-router-dom"
import Container from "./Container"
import AddThoughts from "./AddThoughts"
import AddHobbies from "./AddHobbies"
import HobbyPage from "./HobbyPage"

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
 const mystyle = {
  color: "Black",
  backgroundColor: "emrald",
  padding: "10px",
  fontFamily: "Georgia",
  textAlign: "center",
  borderRadius: "15px",
  borderollapse: "separate",
  marginRight: "20px"
};
const titleStyle = {
  color: "Black",
  backgroundColor: "AntiqueWhite",
  padding: "50px",
  fontFamily: "Lucida Handwriting",
  textAlign: "center"

};
const formStyle = {
  padding: "60px"
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
    <BrowserRouter>
    <div  className="App">
      
      <h1 style={titleStyle} >Hobby Lobby</h1>
      <div backgroundColor="gold" padding="10px">
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRU82CREucDD3h9JGYWkd192lAWsHgD8TGPA&usqp=CAU"align="Center"></img>
      </div>
      <div margin="10px" >
      <NavLink to="/container" padding="10px">
       
        <button type="button" btn class="btn-outline-primary" border-radius="12px"  style={mystyle}>
          All Hobbies
        </button>
       
      </NavLink>
      <NavLink to="/addthought" padding="10px">
      
        <button type="button" btn class="btn-outline-primary"color='orange'style={mystyle}>
          Add Thoughts
        </button>
        
      </NavLink>
      <NavLink to="/addhobbies">
        <button type="button" btn class="btn-outline-primary"color='orange'style={mystyle}>
          Add Hobby
        </button>
      </NavLink>
      </div>
      
      <div>
      
    
      
      </div>
      <div>
      
      </div>
      
      <Switch>
      <Route exact path="/container">
          <Container  hobbies ={hobbies} setHobbies={setHobbies} addThought={addThought} delThought={delThought} handleUpdate={handleUpdate} user={user} mystyle={mystyle}/>
        </Route>
        <Route path="/addthought">
          <div style = {formStyle}>
            <h2>Add Your Thoughts</h2>
          <AddThoughts addThought={addThought} hobbies={hobbies} mystyle={mystyle}/>
          </div>
        </Route>
        <Route path="/addhobbies">
        <div style = {formStyle}>
          <h2>Add Your Hobbies</h2>
          <AddHobbies setHobbies= {setHobbies} mystyle={mystyle}/>
        </div>
        </Route>
        <Route exact path="/container/:id">
          <HobbyPage hobbies={hobbies} user={user} mystyle={mystyle} />
        </Route>
        
      
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
// addHobby={addHobby} delHobby={delHobby} handleUpdate={handleUpdate}