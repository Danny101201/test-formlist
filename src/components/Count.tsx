import React, { PropsWithChildren, memo } from 'react'
interface CountProp extends PropsWithChildren {
  index: number
  // obj: Record<string, unknown>
}
export const Count = memo((({ index, children }: CountProp) => {
  console.log(' render count')
  return (
    <>
      <div>Count : {index}</div>
      {children}
      {/* <button onClick={Logger}>logger</button> */}
    </>
  )
}))
