
import { useState } from 'react';
import './App.css'
import Mode from './mode/Mode';

function App() {
  // State to manage the theme
  // 'light' for light mode, 'dark' for dark mode
  // The initial theme is set to 'light'
  // The toggleTheme function switches between light and dark modes
  // The appStyle object dynamically changes styles based on the current theme
  // The appStyle object is applied to the main container to reflect the current theme
  // The component renders a heading and the Mode component, passing the current theme and toggle function
  // for use theme and settheme
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
