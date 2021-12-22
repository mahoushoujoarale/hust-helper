import { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Image, Button, Text } from "@tarojs/components";
import { login, logout, asyncLogin, asyncLogout } from "../../actions/user";

import "./index.less";

@connect(
  ({ user }) => ({
    isLogin: user.isLogin,
  }),
  (dispatch) => ({
    asyncLogin(afterLogin, info) {
      dispatch(asyncLogin(afterLogin, info));
    },
  })
)

export default class LoginWrap extends Component {
  state = {}

  componentDidMount() {}

  onClickLogin = () => {
    if(this.props.isLogin) {
      console.log('isLogin')
    }else {
      Taro.getUserProfile({
        desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中
        success: (res) => {
          console.log('get user profile', res)
          this.props.asyncLogin(this.props.afterLogin, res);
        },
        fail: (err) => {
          Taro.showToast({
            title: '授权失败',
            icon: 'none',
            duration: 1500,
          })
        }
      })
    }
  };

  render() {
    const { isLogin, afterLogin } = this.props;

    return (
      <Button
        className='login-btn-wrap'
        open-type='getUserInfo'
        onClick={this.onClickLogin}
      >
        {this.props.children}
      </Button>
    );
  }
}
