import React, {useState} from 'react'

const UpdateThoughts = ({thought, handleUpdate}) => {
    
    const [reset, setReset] = useState('')
    const [updateDescription, setUpdateDescription] = useState('')
    const[updateImage, setUpdateImage] = useState('')
    
    
    
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

      function handleAUpdate(e) {
          e.preventDefault()
        
          fetch(`http://localhost:3000/thoughts/${thought.id}`, {
              method: "PATCH",
              headers: {"content-type": "application/json"},
              body: JSON.stringify({description: updateDescription, image: updateImage})
          })
          .then((r)=> r.json())
          .then((update)=> {
            handleUpdate(update)
          })
      }

    return (
        <form onSubmit={handleAUpdate} onReset={resetForm}>
    
        <input
      
          type="text"
          name="description"
          placeholder={thought.description}
          value={updateDescription}
          onChange={changeDescription}
         
        >
        </input>

        <input
      
          type="text"
          name="image"
          placeholder={thought.image}
          value={updateImage}
          onChange={changeImage}
         
        >
        </input>

        <button type='submit'>Update</button>
     </form>
    )
}

export default UpdateThoughts