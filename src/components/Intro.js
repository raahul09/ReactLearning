import React from 'react'
import style from './Intro.css'
import herosvg from '../asset/PNG/Coding.png';
const Intro = () => {
  return (
    <div className='hero-container'>
        <div className="h-left">
            <h2>Hello my Name Is</h2>
            <h1>Rahul Patil</h1>
            <div className="h-title">
                <div className="h-title-wraper">
                    <div className="h-title-item">FrontEnd Web Developer</div>
                    <div className="h-title-item">A/B Testing</div>
                    <div className="h-title-item">Figma</div>
                    <div className="h-title-item">Cro</div>
                    <div className="h-title-item">VWO</div>
                </div>
            </div>
            <p className="h-discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto expedita consectetur, facere fugiat magni dolor tempore nulla nobis dolores, doloribus, omnis placeat saepe at animi voluptatum numquam asperiores recusandae.</p>
        </div>
        <div className="h-right">
        <div className="image-wraper"></div>
        <img src={herosvg} alt="hero " />  
        </div>
    </div>
  )
}

export default Intro