import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import FollowCard from "./FollowCard/index";
import avatar from "../../assets/avatar.png";

import "./index.less";

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  state = {
    follows: [
      {
        name: "小狮子",
        gender: 0,
        avatarUrl: avatar
      },
      {
        name: "小狮子",
        gender: 0,
        avatarUrl: avatar
      },
      {
        name: "小狮子",
        gender: 1,
        avatarUrl: avatar
      }
    ]
  };

  render() {
    return (
      <View className="follow-page">
        <view className="title">我的关注</view>
        <view className="content">
          {this.state.follows.map((item, index) => (
            <FollowCard key={index} info={item} />
          ))}
        </view>
      </View>
    );
  }
}

export default Index;
