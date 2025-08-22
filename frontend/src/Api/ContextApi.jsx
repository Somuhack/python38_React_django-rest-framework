import React from 'react'
import { createContext } from 'react'
export const Store = createContext()
const ContextApi = ({children,data}) => {
  return (
    <Store.Provider value={data}>
        {children}
    </Store.Provider>
  )
}

export default ContextApi