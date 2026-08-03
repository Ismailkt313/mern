import React from 'react'
import { useContext } from 'react'
import { user } from './contect'
const provider = () => {
    const data = useContext(user)
  return (
    <div>{data.name}</div>
  )
}

export default provider