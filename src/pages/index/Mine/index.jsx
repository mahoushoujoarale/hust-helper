import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.less";
import avatar from "../../../assets/avatar.png";
import notice from "../../../assets/if-notification.png";
import hamburger from "../../../assets/hamburger.png";
import chat from "../../../assets/chat-check.png";
import plane from "../../../assets/send-plane.png";
import Taro from "@tarojs/taro";

export default class Mine extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  state = {
    userInfo: {
      name: "小狮子",
      avatarUrl: avatar,
      followCount: 9,
      fansCount: 50,
      auth: false,
      beLiked: 12,
      beStored: 12
    }
  };

  render() {
    return (
      <view className="mine-page">
        <view className="top-box">
          <view className="user-info">
            <view
              className="user-photo"
              onClick={() => Taro.navigateTo({ url: "/pages/userInfo/index" })}
            >
              <Image src={this.state.userInfo.avatarUrl} />
            </view>
            <view className="text-info">
              <view
                className="user-name"
                onClick={() =>
                  Taro.navigateTo({ url: "/pages/userInfo/index" })
                }
              >
                {this.state.userInfo.name}
              </view>
              <view className="relative-count">
                <view
                  className="count-tip"
                  onClick={() =>
                    Taro.navigateTo({ url: "/pages/follow/index" })
                  }
                >
                  我的关注
                  <Text className="count">
                    {this.state.userInfo.followCount}
                  </Text>
                </view>
                <view className="count-tip">
                  我的粉丝
                  <Text className="count">{this.state.userInfo.fansCount}</Text>
                </view>
              </view>
            </view>
            <view
              className="user-auth"
              onClick={() => Taro.navigateTo({ url: "/pages/auth/index" })}
            >
              {this.state.userInfo.auth ? "已认证" : "未认证"}
            </view>
          </view>
          <view className="user-count">
            <view className="count-tip">
              <Text className="count">{this.state.userInfo.beLiked}</Text>被赞
            </view>
            <view className="count-tip">
              <Text className="count">{this.state.userInfo.beStored}</Text>
              被收藏
            </view>
          </view>
        </view>
        <view className="options">
          <view className="option">
            <Image
              src={notice}
              onClick={() => Taro.navigateTo({ url: "/pages/notice/index" })}
            />
            消息通知
          </view>
          <view className="option">
            <Image
              src={hamburger}
              onClick={() => Taro.navigateTo({ url: "/pages/published/index" })}
            />
            我的发布
          </view>
          <view className="option">
            <Image
              src={chat}
              onClick={() =>
                Taro.navigateTo({ url: "/pages/collection/index" })
              }
            />
            我的收藏
          </view>
          <view className="option">
            <Image
              src={plane}
              onClick={() => Taro.navigateTo({ url: "/pages/aboutUs/index" })}
            />
            关于我们
          </view>
        </view>
      </view>
    );
  }
}
