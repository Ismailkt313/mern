import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {incremet,decrement,update} from "./slice"

const Child = () => {
    let data = useSelector((state) => state.counter)
    let [upd,setData] = useState('')
    const dispatch = useDispatch()
  return (
      <div>
          <h2>{data}</h2>
          <button onClick={() => dispatch(incremet())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <input type="text" onChange={(e) => setData(Number(e.target.value))} />
          <button onClick={()=>dispatch(update(upd))}>sub</button>
          hello daaaa
      </div>
  )
}

export default Child