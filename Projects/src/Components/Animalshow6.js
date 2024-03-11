import React,{useState} from 'react'
import bird from '../Image/bird.svg';
import cat from '../Image/cat.svg';
import cow from '../Image/cow.svg';
import dog from '../Image/dog.svg';
import gator from '../Image/gator.svg';
import heart from '../Image/heart.svg';
import horse from '../Image/horse.svg';


const svgMap={
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse,
};
const Animalshow6=({type})=>{
    const[clicks,setClicks]=useState(0);
    const handleClick=(event)=>{
        setClicks(clicks+1);
    }
 


  return (
    <div onClick={handleClick}>
        <img alt="animal" src={svgMap[type]}></img>
        <img alt='heart' src={heart} style={{width:10+10*clicks+'px'}}></img>
    </div>
  )
}

export default Animalshow6