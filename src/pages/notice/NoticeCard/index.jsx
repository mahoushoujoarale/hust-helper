import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";

import "./index.less";

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="notice-page-card">
        <view
          className="user-photo"
          style={{ backgroundImage: this.props.info.avatarUrl }}
        ></view>
        <view className="content-box">
          <view className="content">{this.props.info.content}</view>
          <view className="tags">
            <view className="tag">#{this.props.info.type}</view>
            <view className="tag">#{this.props.info.title}</view>
          </view>
        </view>
        <view className="icon"></view>
      </View>
    );
  }
}

export default Index;
