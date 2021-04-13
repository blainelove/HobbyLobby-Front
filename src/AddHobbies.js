import React, {useState} from 'react'

const AddHobbies = ({setHobbies}) => {
    const[newHobby, setNewHobby] = useState({
        name:"",
        description:"",
        image:"",
        favoites:[],
        thoughts:[],
        user_id:1
    })
        function handleChange(e){
            const key = e.target.name
            const value  = e.target.value

            setNewHobby({...newHobby, [key]: value})
        }
        function handleSubmit(e){
            e.preventDefault ()
            console.log(typeof newHobby.user_id)

            fetch("http://localhost:3000/hobbies", {
                method: "POST",
                headers: 
                {
                    "Content-type": "application/json",
                    Accept: "application/json"
                },

                body: JSON.stringify(newHobby)
            })
            .then((r) => r.json())
            .then((newObject) => setHobbies((hobbies) => [...hobbies, newObject]))
        }

    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={newHobby.name}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={newHobby.description}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="image"
        placeholder="image"
        value={newHobby.image}
        onChange={handleChange}
      ></input>
    
      <button typ="submit">submit</button>
    </form>  
    )
}

export default AddHobbies
