import React from 'react'

const memo = React.memo(({ data }) => {
    console.log(data)
  return (
    <div>from memo{data}</div>
  )
})

export default memo