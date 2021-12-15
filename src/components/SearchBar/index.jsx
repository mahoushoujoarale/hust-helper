import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

export default class SearchBar extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toSearchPage() {
    Taro.navigateTo({
      url: '/pages/search/index'
    })
  }

  render () {
    return (
      <View
        className='search-bar'
        onClick={this.toSearchPage}
      >
        <View><Text>search-bar</Text></View>
      </View>
    )
  }
}

