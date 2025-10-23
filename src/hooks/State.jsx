import React from 'react'
import { useState } from 'react'


const State = () => {
  const [count,setCount]=useState(0)
   //render-dom element use manipulate -render
   const [count1,setCount1] = useState(0)
   const [count2,setCount2]=useState(0)
  return (
    <div>
    <h1>useState example</h1>
    <h2>Count:{count}</h2>
    <button onClick={()=> setCount(count+1)}>Increase</button> 
    <br />
    <button onClick={()=> setCount1(count1+1)}>🩷{count1}</button>  <br />

    <button onClick ={()=>setCount2(count2+1)}>👎{count2}</button>
    

    </div>
  )
}

export default State