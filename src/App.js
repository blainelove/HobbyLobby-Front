
import './App.css';
import React, {useEffect, useState} from "react"
import HobbiesContainer from "./HobbiesContainer"
import User from "./User"
import AddHobbies from "./AddHobbies"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((r)=> r.json ())
    .then(userArray => {
      setUsers(userArray)
    })
     
    
   }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <HobbiesContainer/>
      <User users ={users}/>
      <AddHobbies/>
    </div>
  );
}

export default App;
