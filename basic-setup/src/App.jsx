
import { useState } from 'react';
import './App.css'
import Mode from './mode/Mode';

function App() {
  const[theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 
  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    transition: 'all 0.3s ease',
  };
  return (
    <>
    <h1>Task: Toggle Light/Dark Mode using State&Props</h1>
    <div style={appStyle} className="container">
   <h1>welcome to {theme === 'light' ? 'light': 'Dark'} mode</h1>
   <Mode modeTheme={theme} modetoggleTheme={toggleTheme}/>
   </div>
       </>
  )
}

export default App
