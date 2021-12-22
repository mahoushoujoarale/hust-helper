import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'


import './index.less'

export default class Detail extends Component {
  // componentWillReceiveProps (nextProps) {
  //   console.log(this.props, nextProps)
  // }

  componentDidMount() {
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='detail'>
        detail page
      </View>
    )
  }
}
