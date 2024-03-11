import React from 'react'
import bird from '../Image/bird.svg';
import cat from '../Image/cat.svg';
import cow from '../Image/cow.svg';
import dog from '../Image/dog.svg';
import gator from '../Image/gator.svg';
import heart from '../Image/heart.svg';
import horse from '../Image/horse.svg';
import './Animalshow5.css';

const foo={
    bar:123,baz:false,

}

let a=10;
let b=20;
const tempObject1={
    a:a,b:b,
    c:a,
    d:b,
}
const tempObject2={
    a,
    b,
}
const svgMap={
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse,
}

const Animalshow5 = ({type}) => {
  return (
    <div>
        <img className='img' alt="animal" src={svgMap[type]}></img>
    </div>
  )
}

export default Animalshow5