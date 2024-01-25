import React, { ReactNode, useState } from 'react'

interface FormListType {
  key: string;
}
type ChildrenRenderTYpeParams = {
  add: () => void
  remove: (key: string) => void
  fields: FormListType[]
}
type ChildrenRenderTYpe = ({ fields, add, remove }: ChildrenRenderTYpeParams) => ReactNode
interface FormListProps {
  children: ChildrenRenderTYpe
}
export const FormList = ({ children }: FormListProps) => {
  const [fields, setFields] = useState<FormListType[]>([])
  const add = () => {
    setFields(pre => ([...pre, { key: crypto.randomUUID() }]))
  }
  const remove = (key: string) => {
    setFields(pre => pre.filter(item => item.key !== key))
  }
  return children({ fields, add, remove })
}
