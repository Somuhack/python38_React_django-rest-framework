import React from 'react'

const ComposativeCompo = ({children}) => {
  return (
    <>
    <h1>Hello This is Nav</h1>
      {children}
      <h1>Hello This is Footer</h1>
    </>
  )
}

export default ComposativeCompo