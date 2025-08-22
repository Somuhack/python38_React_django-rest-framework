import React, { useState } from 'react'
import { useEffect } from 'react'
const MyuseEffect = () => {
const [data,setData] =useState(0)
    useEffect(()=>{
        console.log("useEffect is called");
    })
const handleClick = () => {
  setData(data+1)
}
  return (
    <>
    <div>MyuseEffect sw from Euphoria zenx{data}</div>
    <button onClick={handleClick}>Click to add</button>
    </>
  )
}

export default MyuseEffect