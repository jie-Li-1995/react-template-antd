import React, { memo, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Input, Button } from 'antd'

export default function CreateContent () {
  const [testName] = useState('test')
  const [name, setName] = useState('小李')
  const inputRef = useRef(null)

  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')

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

  const onChange1 = useCallback(evt => {
    setVal1(evt.target.value)
  }, [])

  const onChange2 = useCallback(evt => {
    setVal2(evt.target.value)
  }, [])

  const changeName = (val) => {
    setName(val)
    inputRef.current.focus()
  }

  const inputName = (e) => {
    changeName(e.target.value)
  }

  const computedName = useMemo(
    () => {
      console.log('computedName')
      return testName + 'by liu_qihao'
    },
    [testName]
  )

  return (
    <div>
      <h1>{computedName}</h1>
      <Input value={name} ref={inputRef} onChange={inputName} />
      <Button onClick={() => setName('initData')} type="primary">
        initData
      </Button>
      <Button onClick={() => changeName('initData2')}>initData2</Button>
      <br />
      <Child val={val1} onChange={onChange1} />
      <Child val={val2} onChange={onChange2} />
    </div>
  )
}

const Child = memo(function ({ val, onChange }) {
  return <Input value={val} onChange={onChange} />
})
