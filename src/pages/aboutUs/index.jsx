import { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'


import './index.less'

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='about-us-page'>
        <view className="title">关于我们</view>
        <view className="content">我们是软工小组</view>
      </View>
    )
  }
}

export default Index

