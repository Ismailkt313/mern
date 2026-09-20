import React from 'react'
import { inc, dec, update } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const CountInc = () => {
  const [count, setcount] = useState(0)
  const data = useSelector((state) => state.couters.count)
  const dispatch = useDispatch()
  
  const submit = () => {
    dispatch(update(count))
  }
  return (
    <div>
      {data} hey hello
      <input type="number" onChange={(e) => setcount(e.target.value)} />
      <button onClick={()=>dispatch(inc())}>  +  </button>
      <button onClick={submit}>Clickin</button>
    </div>
  )
}

export default CountInc