import React, { useState } from 'react'
import { createContext } from 'react'

export const DataContext = createContext()
const context = ({childrens}) => {
    const [data,setDaata] = useState('')
  return (
      <div>
          <DataContext.Provider value={{ data, setDaata }}>
              { childrens}
              </DataContext.Provider>

    </div>
  )
}

export default context