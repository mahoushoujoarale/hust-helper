import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import star from "../../../assets/star.png";
import Taro from "@tarojs/taro";
import comment from "../../../assets/comment.png";
import like from "../../../assets/good-job.png";

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
      <View className="help-page-card">
        <view className="header">
          <Image className="user-photo" src={this.props.info.avatarUrl} />
          <view className="user-info">
            <view className="user-name">{this.props.info.name}</view>
            <view className="user-fans">{this.props.info.fansCount}订阅量</view>
          </view>
          <view className="follow-button">关注</view>
        </view>
        <view className="title">{this.props.info.title}</view>
        <view className="content">
          <view className="content-wrapper">{this.props.info.content}</view>
          <view
            className="find-more"
            onClick={() =>
              Taro.navigateTo({
                url: "/pages/help/HelpDetail/index"
              })
            }
          >
            查看更多
          </view>
        </view>
        <view className="buttons">
          <view className="button">
            <Image className="icon" src={star} />
            <view className="count">{this.props.info.starCount}</view>
          </view>
          <view className="button">
            <Image className="icon" src={comment} />
            <view className="count">{this.props.info.commentCount}</view>
          </view>
          <view className="button">
            <Image className="icon" src={like} />
            <view className="count">{this.props.info.likeCount}</view>
          </view>
        </view>
      </View>
    );
  }
}

export default Index;