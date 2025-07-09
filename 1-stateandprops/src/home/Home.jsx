import React from 'react'

export default function Home({appCount ,setappCount}) {
  return (
    <div>
        <h1 className='text-center'>Home component</h1>
    <div className='container p-3 my-2'>
      <p className='bg-info'>Count is:{appCount}</p>
    <button className="btn btn-warning p-2" onClick={()=>setappCount(appCount-1)}>Decrease the value of count</button>
    {/* If the value is not negative then use these condition rendering  */}
       {/* {appCount>0 && <button className="btn btn-warning p-2" onClick={()=>setappCount(appCount-1)}>Decrease the value of count</button>} */}
    </div>
    </div>
  )
}
