import React, { ComponentProps, ReactElement, useMemo } from 'react'
type ChildType = ReactElement<ComponentProps<'input'> & { onAlert: () => void }>
interface NOtificationWithPeerChildProps {
  onAlert: () => void,
  children: ChildType | ChildType[]
}
export const NOtificationWithPeerChild = ({
  onAlert,
  children
}: NOtificationWithPeerChildProps) => {
  const wrapperReactNode = useMemo(() => React.Children.map(children, (element) => {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, { onChange: onAlert })
    }
    return children
  }), [children])
  return (
    <div>
      {wrapperReactNode}
    </div>
  )
}
