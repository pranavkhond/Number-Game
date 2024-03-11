import React,{useState} from 'react'

const Animalapp3 = () => {
    const[count,setCount]=useState(0);
    const handleClick=(event)=>{
    // setCount(count+1);//here i get the latest value of count
    //if you pass function to the set method ,react will pass the latest value
    //of the state variable to the arrow function as an argument
    //you should use this technique, if hte change you want to make depends on the previous 
    //change done to the state variable
    setCount((current)=>++current );
    // setCount((current)=>++current);
    // setCount((current)=>++current);
    console.log('button was clicked');

    
}
  return (
    <div>
        <h1>Animalapp3</h1>
        <button onClick={handleClick}>Add Animal</button>
        <div>Number of animal created:{count}</div>

        </div>
  )
}

export default Animalapp3