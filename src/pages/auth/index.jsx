import { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import {postNewUser, postUserMail } from '../../api'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { login, logout, asyncMailLogin, asyncLogout } from "../../actions/user";

import './index.less'

@connect(
  ({ user }) => ({
    isLogin: user.isLogin,
  }),
  (dispatch) => ({
    asyncLogin(afterLogin, info) {
      dispatch(asyncMailLogin(afterLogin, info));
    },
  })
)

class Index extends Component {
  state = {
    userName: '',
    email: '',
    code: '',
    gender: '',
    verified: false,
    answer: '',
    showWrongCodePrompt: false,
  }

  componentDidMount(){
    
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props, nextProps)
  // }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.detail.value
    })
  }

  handleChangeUserName = (e) => {
    this.setState({
      userName: e.detail.value
    })
  }

  handleChangeGender = (e) => {
    this.setState({
      gender: e.detail.value
    })
  }

  handleChangeCode = (e) => {
    this.setState({
      code: e.detail.value
    })
  }

  afterLogin() {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  handleClickAuth = async () => {
    const {email, verified, code, answer, userName, gender} = this.state
    if(!email) {
      return
    }
    if(verified) {
      if(!code) {
        return
      }
      console.log('code', code)
      console.log('ans', answer)
      console.log('check answer', code, answer)
      if(code == answer) {
        // success
        console.log('check pass')
        const data = await postNewUser({
          wx_id: email,
          user_name: userName
        })
        console.log('create new user', data)
        Taro.setStorage({
          key: 'user_name',
          data: userName
        })
        Taro.setStorage({
          key: 'gender',
          data: gender === '???'? 0: 1
        })
        this.props.asyncLogin(this.afterLogin, {
          email,
          user_id: email,
        });
        
      } else {
        setTimeout(() => {
          this.setState({
            showWrongCodePrompt: true
          })
        }, 1000);
        setTimeout(() => {
          this.setState({
            showWrongCodePrompt: false
          })
        }, 6000);
      }
    } else {
      console.log('verify', email)
      this.setState({
        verified: true
      })
      const data = await postUserMail({
        email,
        wx_id: email,
      })
      console.log('get ans', data)
      this.setState({
        answer: data.answer
        // answer: 123
      })
      console.log('update',this.state)
    }
  }

  render() {
    const {email, code, verified, gender, userName, answer, showWrongCodePrompt} = this.state;

    return (
      <View className='auth-page'>
        <view className='title'>
          <Text>?????????HUSTer</Text>
          <Text>?????????????????????</Text>
        </view>
        <view className='form'>
          <Text className='input-title'>?????????</Text>
          <Input value={userName} onInput={this.handleChangeUserName} type='text' placeholder='??????????????????' placeholderStyle='color: #cacaca' />
          <Text className='input-title' >????????????</Text>
          <Input value={email} onInput={this.handleChangeEmail} type='text' placeholder='????????????????????????' placeholderStyle='color: #cacaca' />
          <Text className='input-title'>??????</Text>
          <Input value={gender} onInput={this.handleChangeGender} type='text' placeholder='????????????????????????' placeholderStyle='color: #cacaca' />
          <Text className='input-title'>?????????</Text>
          <Input value={code} onInput={this.handleChangeCode} type='text' placeholder='????????????????????????' placeholderStyle='color: #cacaca' />
          <view className='auth-button' onClick={this.handleClickAuth}>{email && code && answer ? '??????/??????': '???????????????'}</view>
          <Text className='prompt-wrongcode'>{showWrongCodePrompt? '???????????????': ''}</Text>
        </view>
      </View>
    )
  }
}

export default Index

