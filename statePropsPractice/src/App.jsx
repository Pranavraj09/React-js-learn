import { useState } from 'react'
import './App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'

function App() {
  const [click,setClick]=useState(0)
 const headingsection='new state and style props practice'
 const  paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis maiores harum aperiam blanditiis, accusamus incidunt dolore officiis ex totam facere exercitationem repellat unde doloremque corporis necessitatibus quo dolorum iure.'
const footer='complete'
  const handleClick =()=>{
    setClick(prev=>(prev < 3 ? prev + 1 : 3));
  }
  return (
    <>
    <div className='container text-center'>
    <button className="btn btn-info p-3 my-5 p-5 text-center" onClick={handleClick}><b>generate the header,hero,footer</b></button>
      {click >=1 && <Header heading={headingsection}/>}
      {click >=2 &&<Hero heropara={paragraph}/>}
      {click >=3 &&<Footer foot={footer}/>}
      </div>
    </>
  )
}


export default App
