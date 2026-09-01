import React from 'react'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState({})
  let sample = (e) => {
     const name = e.target.name
    const value = e.target.value
    setData({
      [name]: value
    })
  }
  return (
    <div> 
      <h2>{data.name} { data.value}</h2>
      <input type="text" name='afeeda' onChange={sample} />
      <br />
      <input type="text" name='ismail' onChange={sample} />

    </div>
  )
}

export default App