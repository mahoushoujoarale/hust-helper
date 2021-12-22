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
        <view className='title'>关于我们</view>
        <view className='content'>
          <View>我们是来自华中科技大学计算机学院的团队</View>
          <View>小程序名称：华科帮帮忙</View>
          <View>我们致力于以简洁的界面、便捷的操作，为华科全体师生提供一个集失物招领、二手交易、求助捞人于一体的交流平台，有效解决全体师生的主要生活问题。</View>
          <View>代码都是一行一行敲的，求关注～</View>
        </view>
      </View>
    )
  }
}

export default Index

