import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.less'


export default class Mine extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <Text>我的页面</Text>
    )
  }
}

