import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import NoticeCard from "./NoticeCard/index";
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
    notices: [
      {
        content: "亲，你的平板多少钱？",
        type: "二手交易",
        title: "发布的标题",
        avatarUrl: avatar
      },
      {
        content: "亲，你的平板多少钱？",
        type: "二手交易",
        title: "发布的标题",
        avatarUrl: avatar
      },
      {
        content: "亲，你的平板多少钱？",
        type: "二手交易",
        title: "发布的标题",
        avatarUrl: avatar
      },
      {
        content: "亲，你的平板多少钱？",
        type: "二手交易",
        title: "发布的标题",
        avatarUrl: avatar
      }
    ]
  };

  render() {
    return (
      <View className="notice-page">
        <view className="title">消息通知</view>
        <view className="content">
          {this.state.notices.map((item, index) => (
            <NoticeCard key={index} info={item} />
          ))}
        </view>
      </View>
    );
  }
}

export default Index;
