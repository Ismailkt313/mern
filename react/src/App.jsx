import { user } from './contect'
import React from 'react'
import Provider from './provider'

const App = () => {
  return (
    <user.Provider value={{name:"afeeda",friend:"ismail"}}>
    <div>
      <Provider/>
     </div>
    </user.Provider>
  )
}

export default App
