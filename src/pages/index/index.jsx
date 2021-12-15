import { Component } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, Button, Text, Image } from '@tarojs/components'
import SearchBar from '../../components/SearchBar'
import Banner from '../../components/Banner'
import LoginWrap from '../../components/LoginWrap'
import Mine from './Mine'
import './index.less'
import Home from '../../assets/home.png'
import HomeActive from '../../assets/home-active.png'
import Publish from '../../assets/publish.png'
import PublishActive from '../../assets/publish-active.png'
import User from '../../assets/user.png'
import UserActive from '../../assets/user-active.png'
import MiddleNav from './MiddleNav'

class Index extends Component {
  state = {
    activeTabIndex: 0,
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleTabClick(index) {
    this.setState({
      activeTabIndex: index
    })
  }

  toPublishPage() {
    Taro.navigateTo({
      url: '/pages/publish/index'
    })
  }

  render () {
    const {activeTabIndex} = this.state
    return (
      <View className='index'>
        {activeTabIndex === 0 && (
          <View className='home'>
            <SearchBar></SearchBar>
            <Banner></Banner>
            <MiddleNav></MiddleNav>
          </View>)}
        {activeTabIndex === 2 && <Mine></Mine>}
        <View className='bottom-tab'>
          <View
            className={['tab-item', activeTabIndex === 0? 'active': '']}
            onClick={() => this.handleTabClick(0)}
          >
            <Image src={activeTabIndex === 0? HomeActive: Home}></Image>
            <Text>首页</Text>
          </View>
          <LoginWrap afterLogin={this.toPublishPage}>
            <View className={['tab-item', activeTabIndex === 1? 'active': '']}>
              <Image src={activeTabIndex === 1? PublishActive: Publish}></Image>
              <Text>发布</Text>
            </View>
          </LoginWrap>
          <LoginWrap afterLogin={() => this.handleTabClick(2)}>
            <View className={['tab-item', activeTabIndex === 2? 'active': '']}>
              <Image src={activeTabIndex === 2? UserActive: User}></Image>
              <Text>我的</Text>
            </View>
          </LoginWrap>
          </View>
        </View>
    )
  }
}

export default Index

