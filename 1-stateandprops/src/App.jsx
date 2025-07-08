import { useState } from 'react'
import './App.css'

function App() {
  // let count = 0;
  // let handleClick = () => {
  //   count = count++;
  //   console.log(count);
  // }
  const [count,setCount]=useState(0)
  // Handle click event using useState
  // let handleClick = () =>{
  //   setCount(count+1);
  // }

  return (
    
    <>
    <h2>Introduction to state and props</h2>
    <p>Count here is:{count}</p>
    {/* these can be used by usestate count,and setcount method */}
    <button className='btn btn-primary'onClick={()=> setCount(count+1)}>Increase count here</button>
    {/* these are the handleclick event that can be used for usestate */}
    {/* <button className='btn btn-primary' onClick={handleClick}>increase count</button> */}
    {/* for decrease that can that decerease the value bu sing usestate */}
    <button className="btn btn-warning mx-2"onClick={()=>setCount(count-1)}>Decrease the value here</button>
    {/* for reset the value  */}
    <button className="btn btn-danger mx-2" onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default App
// hooks:special type of predefined functions that allow us to use state and other React features in functional components.
// states:it is an object ,we have to pass variable(state),function(setstate),these setstate()ill be help to update state value dynamically
// useState();
// count,setCount:
// theme,setTheme:
// props:props are used to pass data from parent component to child component.

