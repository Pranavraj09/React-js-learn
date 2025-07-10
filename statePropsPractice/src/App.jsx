import './App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'

function App() {
 const headingsection='new state and style props practice'
 const  paragraph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis maiores harum aperiam blanditiis, accusamus incidunt dolore officiis ex totam facere exercitationem repellat unde doloremque corporis necessitatibus quo dolorum iure.'
const footer='complete'
  return (
    <>
      <Header heading={headingsection}/>
      <Hero heropara={paragraph}/>
      <Footer foot={footer}/>
    </>
  )
}

export default App
