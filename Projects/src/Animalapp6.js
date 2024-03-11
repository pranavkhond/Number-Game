import React,{useState} from 'react'
import Animalshow6 from './Components/Animalshow6';


function getRandomAnimal(){
    const animals=['bird','cat','cow','dog','gator','horse'];
    let randomNum=Math.random();//this will genrate a number between 0 and 1
    console.log(randomNum);
    let index=[Math.floor(randomNum*animals.length)];
    console.log(index);
    let animalName=animals[index];
    return animalName;

}


const Animalapp6 = () => {
    const[animal,setAnimals]=useState([]);
    
    const handleClick=(event)=>{
        let selectedAnimal=getRandomAnimal();
        console.log('selectedAnimal'+selectedAnimal);
        setAnimals([...animal,selectedAnimal]);
    }
    const renderedAnimals=animal.map((animal,index)=>{
    return <Animalshow6 type={animal} key={index}></Animalshow6>
    })
  return (
    <div>
            <h1>Animal APP:6 List Of ANimal will be displayed here</h1>
            <div>
                <button onClick={handleClick}>Add Animal</button>
                </div>

                <div>
                    <h1>{renderedAnimals}</h1>
                </div>

    </div>

  )
}

export default Animalapp6