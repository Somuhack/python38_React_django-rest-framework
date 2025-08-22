import React from 'react'
import Account from './Account'
import { useContext } from 'react'
import { Mycontext } from '../../App'
import { Store } from '../../Api/ContextApi'
const Profile = () => {
    // const data = useContext(Mycontext)
    const backdata = useContext(Store)
     console.log(backdata);
     
  return (
    <div>Profile :{backdata} 
        <Account/>
    </div>
  )
}

export default Profile