import React, { useState, useEffect, useRef } from 'react'
import { Input, Button } from 'antd'

export default function CreateContent() {
  const [name, setName] = useState('小李')
  const inputRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setName('setTimeOut')
    }, 5000)
    return () => {
      // 该函数会在组件卸载和更新时调用
      console.log('该函数会在组件卸载和更新时调用')
      clearTimeout(timer)
    }
  }, [name]) // 数组表示 effect 依赖的变量，只有当这个变量发生改变之后才会重新执行 efffect 函数

  const changeName = (val) => {
    console.log(1111)
    setName(val)
    inputRef.current.focus()
  }

  const inputName = (e) => {
    changeName(e.target.value)
  }

  return (
    <div>
      <Input value={name} ref={inputRef} onChange={inputName} />
      <Button onClick={() => setName('initData')} type="primary">
        initData
      </Button>
      <Button onClick={() => changeName('initData2')}>initData2</Button>
    </div>
  )
}
