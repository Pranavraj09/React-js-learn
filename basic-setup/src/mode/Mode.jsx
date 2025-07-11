import React from 'react'

export default function Mode({ modeTheme, modetoggleTheme }) {
  return (
    <div style={{
        padding: '10px 20px',
        backgroundColor: modeTheme === 'light' ? '#eee' : '#333',
        color: modeTheme === 'light' ? '#000' : '#fff',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <div>My App</div>
      <button className='btn btn-info'onClick={modetoggleTheme}>
        Switch to {modeTheme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

    </div>
  )
}
