import { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import view from "../../assets/view.png";

import "./index.less";

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  state = {
    passwordVisible: false
  };

  render() {
    return (
      <View className="login-page">
        <view className="title">
          <Text>欢迎来到帮帮忙</Text>
        </view>
        <view className="form">
          <Text className="input-title">姓名</Text>
          <view className="input-wrapper">
            <Input
              type="text"
              placeholder="姓名/用户名"
              placeholderStyle={"color: #cacaca"}
            />
          </view>
          <Text className="input-title">密码</Text>
          <view className="input-wrapper password">
            <Input
              type="text"
              password={this.state.passwordVisible ? false : true}
              placeholder="输入你的密码"
              placeholderStyle={"color: #cacaca"}
            />
            <Image
              className="icon"
              src={view}
              onClick={() => {
                this.setState({ passwordVisible: !this.state.passwordVisible });
                console.log(1);
              }}
            />
          </view>
          <view className="login-button">登录/注册</view>
        </view>
      </View>
    );
  }
}

export default Index;
