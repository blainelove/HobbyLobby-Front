import React from 'react'

const Thoughts = ({thought}) => {


    return (
        <div>
            <h3>{thought.description}</h3>
            <img src={thought.image} alt={thought.description}></img>
            <p>{thought.likes}</p>

        </div>
    )
}

export default Thoughts
