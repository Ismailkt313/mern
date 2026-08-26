import React from 'react'
import { lazy,Suspense } from 'react'
const Child1 = lazy(()=>import("./child1"))

const Parent = () => {
  return (
      <div>
          <Suspense fallback="loading......">
              <Child1 />
          </Suspense>
    </div>
  )
}

export default Parent