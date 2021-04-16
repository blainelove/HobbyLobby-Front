
import React, {useState} from 'react'


const UpdateHobby = ({updateHobby, hobby}) => {
    const[updateName, setUpdateName] = useState(hobby.name)
    const [reset, setReset] = useState('')
    const [updateDescription, setUpdateDescription] = useState(hobby.description)
    const[updateImage, setUpdateImage] = useState(hobby.image)
    
    function handleChange(e){
        const name = e.target.value
        setUpdateName(name)
      }
    
      function changeDescription(e) {
        const description = e.target.value
        setUpdateDescription(description)
    
      }
    
      function changeImage(e){
        const image = e.target.value
        setUpdateImage(image)
    
      }
    
      function resetForm(){
        setReset(reset = '')
      }

      function handleTheUpdate(e) {
          e.preventDefault()
        
          fetch(`http://localhost:3000/hobbies/${hobby.id}`, {
              method: "PATCH",
              headers: {"content-type": "application/json"},
              body: JSON.stringify({name: updateName, description: updateDescription, image: updateImage})
          })
          .then((r)=> r.json())
          .then((update)=> {
            updateHobby(update)
          })
      }

    return (
        <form onSubmit={handleTheUpdate} onReset={resetForm}>
       
        <input
      
          type="text"
          name="name"
          placeholder={hobby.name}
          value={updateName}
          onChange={handleChange}
         
        >
        </input>

        <input
      
          type="text"
          name="description"
          placeholder={hobby.description}
          value={updateDescription}
          onChange={changeDescription}
         
        >
        </input>

        <input
      
          type="text"
          name="image"
          placeholder={hobby.image}
          value={updateImage}
          onChange={changeImage}
         
        >
        </input>

        <button type='submit'>Update</button>
     </form>
    )
}

export default UpdateHobby
