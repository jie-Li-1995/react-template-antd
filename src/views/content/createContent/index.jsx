import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd'

export default function CreateContent() {
  const [name, setName] = useState('小李')

  useEffect(() => {
    const timer = setTimeout(() => {
      setName('setTimeOut')
    }, 5000)
    return () => {
      // 该函数会在组件卸载和更新时调用
      console.log('该函数会在组件卸载和更新时调用')
      clearTimeout(timer)
    }
  })

  const changeName = () => {
    setName('initData2')
  }

  return (
    <div>
      <Input value={name} />
      <Button onClick={() => setName('initData')} type="primary">
        initData
      </Button>
      <Button onClick={changeName}>initData2</Button>
    </div>
  )
}
