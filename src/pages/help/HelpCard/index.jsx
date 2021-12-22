import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import star from "../../../assets/star.png";
import Taro from "@tarojs/taro";
import comment from "../../../assets/comment.png";
import like from "../../../assets/good-job.png";
import avatar from "../../../assets/my-avatar.png"

import "./index.less";
import { starDiscussion, goodDiscussion } from '../../../api';

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleGood = async () => {
    const userId = Taro.getStorageSync("user_id")

    console.log('good', this.props.info.discussionID)
    goodDiscussion({
      wx_id: userId,
      discussionID: this.props.info.discussionID
    }).then((data) => {
      Taro.showToast({
        title: "点赞成功！",
        icon: "success",
        duration: 1000,
      });
      setTimeout(() => {
        Taro.reLaunch({
          url: "/pages/help/index",
        });
      }, 1000);
    })
    .finally(() => {
      Taro.hideLoading();
    });
  }

  handleStar = async () => {
    const userId = Taro.getStorageSync("user_id")

    console.log('star', this.props.info.discussionID)
    starDiscussion({
      wx_id: userId,
      discussionID: this.props.info.discussionID
    })
    .then((data) => {
      Taro.showToast({
        title: "收藏成功！",
        icon: "success",
        duration: 1000,
      });
      setTimeout(() => {
        Taro.reLaunch({
          url: "/pages/help/index",
        });
      }, 1000);
    })
    .finally(() => {
      Taro.hideLoading();
    });
  }

  render() {
    return (
      <View className='help-page-card'>
        <view className='header'>
          {/* <Image className='user-photo' src={this.props.info.avatarUrl} /> */}
          <Image className='user-photo' src={avatar} />
          <view className='user-info'>
            <view className='user-name'>{this.props.info.authorName}</view>
            <view className='user-fans'>{this.props.info.starredNumber} 订阅量</view>
          </view>
          <view onClick={this.handleStar} className='follow-button'>收藏</view>
        </view>
        <view className='title'>{this.props.info.title}</view>
        <view className='content'>
          <view className='content-wrapper'>{this.props.info.context}</view>
          <view
            className='find-more'
            onClick={() =>
              Taro.navigateTo({
                url: `/pages/help/HelpDetail/index?detail=${JSON.stringify(this.props.info)}`
              })
            }
          >
            查看更多
          </view>
        </view>
        {this.props.info.imageUrl ? (
          <Image className='preview-pic' src={this.props.info.imageUrl} />
        ) : (
          <view style={{ height: "30Px" }}></view>
        )}
        <view className='buttons'>
          <view className='button'>
            <Image className='icon' onClick={this.handleStar} src={star} />
            <view className='count'>{this.props.info.starredNumber}</view>
          </view>
          <view className='button'>
            <Image className='icon' src={comment} />
            <view className='count'>{this.props.info.commentCount}</view>
          </view>
          <view onClick={this.handleGood} className='button'>
            <Image className='icon' src={like} />
            <view className='count'>{this.props.info.goodNumber}</view>
          </view>
        </view>
      </View>
    );
  }
}

export default Index;
