import { useCallback, useMemo, useState } from 'react'

import './App.css'
import { Count } from './components/Count'
import { NOtificationWithPeerChild } from './components/NOtificationWithPeerChild'
import { DownloadButton } from './components/DownloadButton'
import { FormList } from './components/FormList'
const initionalState = 0

const Logger = () => {
  console.log('Logger')
}

function App() {
  const [count, setCount] = useState({ index: 0, mount: '' })
  const [name, setName] = useState<string>('')
  const converBlobToURL = (text: string) => {
    const blobData = new Blob([text], { type: 'plain/text' })
    return URL.createObjectURL(blobData)
  }
  const downloadDataFromURL = (url: string, fileName: string) => {
    const atag = document.createElement('a')
    atag.href = url
    atag.download = fileName
    document.body.appendChild(atag)
    atag.click()
    document.body.removeChild(atag)
    URL.revokeObjectURL(url)
  }
  const handleDownload = () => {
    const url = converBlobToURL(name)
    downloadDataFromURL(url, 'aaa.txt')
  }
  return (
    <>
      <FormList>
        {({ fields, add, remove }) => {
          if (fields.length === 0) return (
            <button onClick={add}>+add</button>
          )
          return (
            <>
              {fields.map(field => (
                <div key={field.key} >
                  <p>{field.key}</p>
                  <button onClick={add}>+add</button>
                  <button onClick={() => remove(field.key)}>remove</button>
                </div>
              ))}
            </>
          )
        }}
      </FormList>
      {/* <input type="text" value={name} onChange={e => setName(e.target.value)} /> */}
      {/* <button onClick={() => setCount(pre => ({ ...pre, index: pre.index + 1 }))}>+</button> */}
      {/* <button onClick={() => setCount(initionalState)}>reset</button> */}
      {/* <input aria-label='button' type="text" value={count.mount} onChange={e => setCount(pre => ({ ...pre, mount: e.target.value }))} />
      <Count index={count.index} >
        <p>132</p>
      </Count > */}
      {/* <NOtificationWithPeerChild onAlert={() => console.log('alert')}>
        <input type="text" name="name" />
        <input type="text" name="name2" />
        <input type="text" name="name3" />
      </NOtificationWithPeerChild> */}
      <button onClick={handleDownload}>download</button>
    </>
  )
}

export default App
