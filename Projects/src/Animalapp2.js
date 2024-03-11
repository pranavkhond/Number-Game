import React from 'react'
import Animalshow2 from './Components/Animalshow2';
const Animalapp2 = () => {
    const handleClick=()=>{
        console.log('button was clicked');
    }
  return (
    <div>
    <h1>Animal app</h1>
<button onClick={handleClick}>Add Animal</button>
<Animalshow2></Animalshow2>
    </div>

  )
}

export default Animalapp2