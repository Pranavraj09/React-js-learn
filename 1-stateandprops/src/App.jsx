import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import Navbar from './navbar/Navbar'

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
    <h2 className='text-center bg-dark text-light p-4'>Introduction to state and props</h2>
    <Navbar navCount={count} navSetCount={setCount}/>
    <h1 className='text-center'>App component</h1>
    <div className='container p-3 bg-secondary'>
    <p className='text-light'>Count here is:{count}</p>
     <hr />
    {/* these can be used by usestate count,and setcount method */}
    <button className='btn btn-primary'onClick={()=> setCount(count+1)}>Increase count here</button>
    {/* these are the handleclick event that can be used for usestate */}
    {/* <button className='btn btn-primary' onClick={handleClick}>increase count</button> */}
    {/* for decrease that can that decerease the value by using usestate */}
    {/* making the project that can be the count value is not negatively that the value is minimum 0 not negative value
    condition are
    if count is 0 then decrease button is remove 
    condiional rendering:component will render while certain condition met,showing different UI element (or holding then) based on some condition */}
    {/* {count>0 && <button className="btn btn-warning mx-2"onClick={()=>setCount(count-1)}>Decrease the value here</button>} */}
    {/* for reset the value  */}
    {/* <button className="btn btn-danger mx-2" onClick={()=>setCount(0)}>Reset</button> */}
    </div>
    {/* Destructuring in javascript play a role to perform it*/}
    <Home appCount={count} setappCount={setCount}/>
    {/* this is the home component that can be used for the home page */}
    </>
  )
}


export default App
// hooks:special type of predefined functions that allow us to use state and other React features in functional components.
// states:it is an object ,we have to pass variable(state),function(setstate),these setState()ill be help to update state value dynamically
// useState();
// count,setCount:
// theme,setTheme:
// props:props are used to pass data from parent component to child component.
// in that mainly used conditional rendering and ternary operator(line od code is minimum)

// simple example of usestate without any complexity that can be make increase and decrease the value of count and reset the value of count 

// function App() {
//   // let count = 0;
//   // let handleClick = () => {
//   //   count = count++;
//   //   console.log(count);
//   // }
//   const [count,setCount]=useState(0)
//   // Handle click event using useState
//   // let handleClick = () =>{
//   //   setCount(count+1);
//   // }

//   return ( 
//     <>
//     <h2>Introduction to state and props</h2>
//     <p>Count here is:{count}</p>
//     {/* these can be used by usestate count,and setcount method */}
//     <button className='btn btn-primary'onClick={()=> setCount(count+1)}>Increase count here</button>
//     {/* these are the handleclick event that can be used for usestate */}
//     {/* <button className='btn btn-primary' onClick={handleClick}>increase count</button> */}
//     {/* for decrease that can that decerease the value bu sing usestate */}
//     <button className="btn btn-warning mx-2"onClick={()=>setCount(count-1)}>Decrease the value here</button>
//     {/* for reset the value  */}
//     <button className="btn btn-danger mx-2" onClick={()=>setCount(0)}>Reset</button>
//     </>
//   )
// }