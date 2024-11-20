import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import banner from '../images/New_York.jpg'



/*1 way of adding image in ReactJs app */
/*
function myElement() {


  return (
    <>
      <div>
      <figure >
        <img src="./images/New_York.jpg" alt="New York"/>
        <figcaption>React JS is awesome</figcaption>
      </figure>
         <h2 className='hero'>Igor Tasevski</h2>
        
      </div>
      

      
        
    </>  
    
  )
}

export default myElement






/*2 way of adding image in ReactJs app */

const App = () => {
  return (
     <div>
        <img style={{ width: 900, height: 600 }} src={banner} alt="New York" />

        <h1 className="hero">Igor Tasevski</h1>
     </div>
  );
};




export default App










