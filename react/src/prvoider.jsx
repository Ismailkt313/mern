import React from 'react'
import { UserContext } from './context'
import { useState } from 'react'

const Prvoider = ({ children }) => {
 const [count,setCount] = useState(0)
  return (
    <UserContext.Provider value={{count,setCount}}>
      {children}
    </UserContext.Provider>
  )
}

export default Prvoider