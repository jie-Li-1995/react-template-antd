import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { connect } from 'react-redux'
import { increment, decrement } from '@/store/modules/counter/actions'

@connect(
  state => ({ counter: state.counter }),
  { increment, decrement }
)

class Test extends Component {
  state = {
    name: 'test'
  }

  componentDidMount () {
    console.log(this.state)
    console.log(this.props)
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    // 两者的参数是不相同的，
    // 而getDerivedStateFromProps是一个静态函数，
    // 也就是这个函数不能通过this访问到class的属性，也并不推荐直接访问属性。
    // 而是应该通过参数提供的nextProps以及prevState来进行判断，根据新传入的props来映射到state。
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    // 两者的参数是不相同的，
    // 而getDerivedStateFromProps是一个静态函数，
    // 也就是这个函数不能通过this访问到class的属性，也并不推荐直接访问属性。
    // 而是应该通过参数提供的nextProps以及prevState来进行判断，根据新传入的props来映射到state。
  }


  add = () => {
    let Number = this.refs.MySelect.state.value * 1
    this.props.increment(Number)
  }

  cut = () => {
    let Number = this.refs.MySelect.state.value * 1
    this.props.decrement(Number)
  }

  render () {
    return (
      <div>
        <Input defaultValue={1} ref='MySelect' />
        <h1>{this.props.counter}</h1>
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.cut}>—</Button>
      </div>
    )
  }
}

export default Test
