import React, {useState} from 'react'

const UpdateThoughts = ({thought, handleUpdate, user, thoughtstyle, mystyle}) => {
    const isUser = thought.user_id === user
    const [reset, setReset] = useState('')
    const [updateDescription, setUpdateDescription] = useState(thought.description)
    const[updateImage, setUpdateImage] = useState(thought.image)
    const[likes, setLikes] = useState(thought.likes)
    
    
      function handleLikes(){
        setLikes(likes + 1)
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
      

      function handleAUpdate(e) {
          e.preventDefault()
        
          fetch(`http://localhost:3000/thoughts/${thought.id}`, {
              method: "PATCH",
              headers: {"content-type": "application/json"},
              body: JSON.stringify({description: updateDescription, image: updateImage, likes: likes})
          })
          .then((r)=> r.json())
          .then((update)=> {
            handleUpdate(update)
          })
      }

    return (
        <form onSubmit={handleAUpdate} onReset={resetForm}>
        <div>
        <button style ={mystyle} onClick={handleLikes}> {likes} likes </button>
        </div>
        {(isUser) &&< input
      
          type="text"
          name="description"
          placeholder={thought.description}
          value={updateDescription}
          onChange={changeDescription}
         
        >
        </input>}

        {(isUser) &&<input
      
          type="text"
          name="image"
          placeholder={thought.image}
          value={updateImage}
          onChange={changeImage}
         
        >
        </input>}

        <button style={mystyle} type='submit'>Update</button>
     </form>
    )
}

export default UpdateThoughts