import React from 'react'
import Profile from './Profile'
import ContextApi from '../../Api/ContextApi'
const Loging = () => {

    const username ="souvik@gmail.com"
  return (
    <div>Loging :  <br/>
    <ContextApi data={username } >
         <Profile />
    </ContextApi>
       
    </div>
  )
}

export default Loging