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
      <View className='user-info-page'>
        <view className="title">
          <Text>修改</Text>
          <Text>个人信息</Text>
        </view>
        <view className="form">
          <Text className="input-title">学校</Text>
          <Input type='text' placeholder='学校全称' placeholderStyle={"color: #cacaca"} />
          <Text className="input-title">邮箱</Text>
          <Input type='text' placeholder='输入你的邮箱' placeholderStyle={"color: #cacaca"} />
          <Text className="input-title">姓名</Text>
          <Input type='text' placeholder='姓名/用户名' placeholderStyle={"color: #cacaca"} />
          <Text className="input-title">性别</Text>
          <Input type='text' placeholder='你是男生还是女生' placeholderStyle={"color: #cacaca"} />
          <Text className="input-title">年级</Text>
          <Input type='text' placeholder='请输入你的年级' placeholderStyle={"color: #cacaca"} />
          <view className="user-info-button">确认修改</view>
        </view>
      </View>
    )
  }
}

export default Index

