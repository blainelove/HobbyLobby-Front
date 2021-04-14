import React, {useState} from 'react'

const AddThoughts = ({addThought, hobbies}) => {
    const[newThought, setNewThought] = useState({
        description:"",
        image:"",
        likes:1,
        user_id:1,
        hobby_id:1
    })
    let ggggHobbies = hobbies.map((hppp) => {
        return <option value={hppp.id}> {hppp.name}</option>
    })
    let hob = hobbies.map((h)=> {
        return h.id
    })
        function handleChange(e){
            const key = e.target.name
            const value  = e.target.value

            setNewThought({...newThought, [key]: value})
        }
        function handleSubmit(e){
            e.preventDefault ()
            

            fetch("http://localhost:3000/thoughts", {
                method: "POST",
                headers: 
                {
                    "Content-type": "application/json",
                    Accept: "application/json"
                },

                body: JSON.stringify(newThought)
            })
            .then((r) => r.json())
            .then((newObject) => addThought(newObject))
        }

    return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        name="description"
        placeholder="description"
        value={newThought.description}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="image"
        placeholder="image"
        value={newThought.image}
        onChange={handleChange}
      ></input>
      <select
      value={newThought.hobby_id}
        onChange={handleChange}
        name="hobby_id" 
        >
      {ggggHobbies}
      </select>
    
      <button typ="submit">submit</button>
    </form>  
    )
}

export default AddThoughts
