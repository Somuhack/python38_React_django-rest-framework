import React from 'react'
import { use } from 'react'
import { useState } from 'react'
const MyuseState = () => {
    const [data,setData]=useState(10)
    const [name,setName]=useState("Trisha")
    
    // setData(40)
  return (
 <>
 <h1>Name of a user :{name}</h1>
 <button onClick={()=>setName("Souvic")}>Change to Souvic</button>
 <button onClick={()=>setName("SOMNATH")}>Change to SOMNATH</button>
    <div>MyuseState : {data}</div>
    <button onClick={()=>setData(data+1)}>Inc by 1</button>
    <button onClick={()=>setData(data+2)}>Inc by 2</button>
    <button onClick={()=>setData(data-2)}>Dec by 2</button>
    <button onClick={()=>setData(data+20)}>Add 20</button>
 </>
  )
}

export default MyuseState