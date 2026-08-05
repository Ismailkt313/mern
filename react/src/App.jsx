import React,{useState,useEffect} from 'react'
import Dropdown from './dropdown'

const App = () => {
  const [count, setCount] = useState(0)
  const [start,setStart] = useState(false)
  useEffect(() => {
    let timer 
    if (start) {
      timer = setInterval(() => {
         setCount((a)=>a+=1)
       },1000)
    }
    return ()=> clearInterval(timer)
  },[start])
  return (
    <div>
      <button onClick={() => setStart((a) => !a)}>counter</button>
      <h2>{count}</h2>
      <Dropdown></Dropdown>
    </div>
  )
}

export default App
