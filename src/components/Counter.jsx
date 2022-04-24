import React, { useState } from 'react'
import "./Counter.css"
const Counter = () => {
    const [value,setValue] = useState(1)
    const [loading , setLoading] = useState(false)
  return (
    <>
    <div className='counter-wrapper'>

        <button>-</button>
        <input onClick={(e)=>{
            e.target.readOnly = false


        }} onChange={(e)=>{
            console.log(e.target.value)
        }} defaultValue={value}   readOnly  type="number" />
        <button>+</button>
    </div>
    </>
  )
}

export default Counter