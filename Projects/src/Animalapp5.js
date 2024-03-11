import React,{useState} from 'react'
import Animalshow5 from './Components/Animalshow5';
import './Animalapp5.css'


function getRandomAnimal(){
    const animals=['bird','cat','cow','dog','gator','horse'];
    let randomNum=Math.random();//this will genrate a number between 0 and 1
    console.log(randomNum);
    let index=[Math.floor(randomNum*animals.length)];
    console.log(index);
    let animalName=animals[index];
    return animalName;

}


const Animalapp5 = () => {
    const[animal,setAnimals]=useState([]);
    
    const handleClick=(event)=>{
        let selectedAnimal=getRandomAnimal();
        console.log('selectedAnimal'+selectedAnimal);
        setAnimals([...animal,selectedAnimal]);
    }
    const renderedAnimals=animal.map((animal,index)=>{
    return <Animalshow5 type={animal} key={index}></Animalshow5>
    })
  return (
    <div>
            <h1>Animal APP:5 List Of ANimal will be displayed here</h1>
            <div>
                <button onClick={handleClick}>Add Animal</button>
                </div>

                <div>
                    <h1 className='main'>{renderedAnimals}</h1>
                </div>

    </div>

  )
}

export default Animalapp5