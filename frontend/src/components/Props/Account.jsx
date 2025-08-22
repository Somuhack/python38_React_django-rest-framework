import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../../App'
const Account = () => {

    const name = useContext(Mycontext)
  return (
    <div>Account : {name}</div>
  )
}

export default Account