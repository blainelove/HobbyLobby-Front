
import './App.css';
import React, {useEffect, useState} from "react"
import Container from "./Container"
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

   function addHobby(hobby){
    const userId = hobby.user_id
    let user = [...users].filter(user => user.id === userId)[0]
    let allUsers = [...users].filter(user=> user.id !== userId)

    user.hobbies = [...user.hobbies, hobby]
    allUsers = [...allUsers, user]
    setUsers(allUsers)
 }

 function delHobby(hobby) {
  const hobbyId = hobby.id
  const userId = hobby.user_id 
  let user = [...users].filter(use => use.id === userId)[0]
  
  let allUsers = [...users].filter(use => use.id !== userId)
  
  user.hobbies=user.hobbies.filter(hobby => hobby.id !== hobbyId)
  
  allUsers = [...allUsers, user]//.sort()
  setUsers(allUsers) 
 }

  return (
    <div className="App">
      <h1>Hello</h1>
      <Container users = {users} addHobby={addHobby} delHobby={delHobby}/>
      <User users={users} setUsers={setUsers}/>
      <AddHobbies addHobby={addHobby}/>
    </div>
  );
}

export default App;
