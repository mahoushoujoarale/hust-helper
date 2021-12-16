import { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'
import search from "../../assets/search.png";


import './index.less'

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  state = {
    searchPlaceholder: "二手计算器",
    hotTags: ["流浪地球", "流浪地球", "流浪地球", "流浪地球", "流浪地球", "流浪地球", "流浪地球", "流浪地球", "流浪地球"],
    historyTags: ["篮球鞋", "篮球鞋", "篮球鞋", "篮球鞋", "篮球鞋", "篮球鞋", "篮球鞋"]
  }

  render() {
    return (
      <View className='search'>
        <View className="search-header">
          <View className='header-search-bar'>
            <Image src={search} />
            <Input type='text' placeholder={this.state.searchPlaceholder} placeholderStyle={"color: #d5d5d5; font-size: 12Px"} />
          </View>
          <View className="search-button">搜索</View>
        </View>
        <view className="search-hot">
          <view className="title">热门搜索</view>
          <view className="tags">
            {this.state.hotTags.map((item, index) => <view className="tag" key={index}>{item}</view>)}
          </view>
        </view>
        <view className="search-history">
          <view className="title">历史搜索<view className="remove" onClick={() => this.setState({ historyTags: [] })}></view></view>
          <view className="tags">
            {this.state.historyTags.map((item, index) => <view className="tag" key={index}>{item}</view>)}
          </view>
        </view>
      </View>
    )
  }
}

export default Index

