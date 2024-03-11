import React,{useState} from 'react'

function getRandomAnimal(){
    const animals=['bird','cat','cow','dog','gator','horse'];
    let randomNum=Math.random();//this will genrate a number between 0 and 1
    console.log(randomNum);
    let index=[Math.floor(randomNum*animals.length)];
    console.log(index);
    let animalName=animals[index];
    return animalName;

}

const Animalapp4 = () => {
    const[animal,setAnimals]=useState([]);
    const handleClick=(event)=>{
        let selectedAnimal=getRandomAnimal();
        console.log('selectedAnimal'+selectedAnimal);
        setAnimals([...animal,selectedAnimal]);
    }

  return (
    <div>
            <h1>Animal APP:4 List Of ANimal will be displayed here</h1>
            <div>
                <button onClick={handleClick}>Add Animal</button>
                </div>

                <div>animal is{animal}</div>

    </div>

  )
}

export default Animalapp4