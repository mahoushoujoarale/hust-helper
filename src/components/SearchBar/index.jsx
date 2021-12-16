import { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'
import search from "../../assets/search.png";

export default class SearchBar extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toSearchPage() {
    Taro.navigateTo({
      url: '/pages/search/index'
    })
  }

  state = {
    searchPlaceholder: "二手计算器"
  }

  render() {
    return (
      <View
        className='search-bar'
        onClick={this.toSearchPage}
      >
        <Image src={search} />
        <Input type='text' placeholder={this.state.searchPlaceholder} placeholderStyle={"color: #d5d5d5; font-size: 12Px"} />
      </View>
    )
  }
}

