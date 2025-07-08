import React, { useState } from 'react'

export default function Counter() {
    const [counter,setCounter]=useState(0)
  return (
    <div>
      <h2>Counter app will be present</h2>
      <p>count will be :{counter}</p>
      {/* increase the counter value */}
      <button className="btn btn-info mx-2"onClick={()=>setCounter(counter+5)}>Increase the count</button>
      {/* decrease the counter value and that can not render the value negative sor put the condition*/}
      {counter>0 && <button className="btn btn-primary mx-3"onClick={()=>setCounter(counter-5)}>Decrease the count</button>}
        {/* reset the counter value */}
        <button className="btn btn-secondary"onClick={()=>setCounter(0)}>Reset the count</button>
    </div>
  )
}
