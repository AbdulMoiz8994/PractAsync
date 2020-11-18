import React, { useState } from 'react'

export const Count = () => {
  const[get, getNub]=useState(0)
  
    return (
        <div>
            {/* <h1>hello moiz</h1> */}
    <button onClick={() =>{getNub(get +1)}}>Select Number  {get}</button>
        </div>
    )
}
