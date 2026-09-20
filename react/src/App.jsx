import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import CountInc from './Counter'
import Memo from "./memo"
import { useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState(0)
  let [counting, setCounting] = useState(0)
  let inc=() => {
    setCounter(a=>a+1)
  }
  return (
    <div>
      <Provider store={store}>
    <CountInc />
      </Provider>
      <button onClick={()=>setCounter(a=>a+1)}>for child+</button>
      <button onClick={()=>setCounting((a) => a + 1)}>+</button>
      <Memo data={counter} />
    </div>
  )
}

export default App