import React from 'react'
import {useEffect} from 'react'

const Effect = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('from useEffect');
    }
    ,[])
  return (
    <div>
    <h1>useEffect example</h1>
    <h2>Count:{count}</h2>
    <button onClick={()=> setCount(count+1)}>Increase</button> 
    <br />
    <button onClick={()=> setCount1(count1+1)}>🩷{count1}</button>  <br />

    <button onClick ={()=>setCount2(count2+1)}>👎{count2}</button>
    

    </div>
  )
}

export default effect