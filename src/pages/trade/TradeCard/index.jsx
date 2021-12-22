import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import price from "../../../assets/price.png";
import Taro from "@tarojs/taro";
import star from "../../../assets/star.png";
import comment from "../../../assets/comment.png";
import like from "../../../assets/good-job.png";
import avatar from "../../../assets/my-avatar.png"
import { starDiscussion, goodDiscussion } from '../../../api';

import "./index.less";

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
          url: "/pages/trade/index",
        });
      }, 1000);
    })
    .finally(() => {
      Taro.hideLoading();
    });
  }
  
  render() {
    return (
      <View className='trade-page-card'>
        <view className='header'>
          <Image className='user-photo' src={this.props.info.authorAvator} />
          <view className='user-info'>
            <view className='user-name'>{this.props.info.authorName}</view>
            <view className='user-fans'>{this.props.info.starredNumber}订阅量</view>
          </view>
          <view className='price'>
            <Image className='price-icon' src={price} />
            <view className='origin-price'>{this.props.info.priceOrigin}</view>
            <view className='current-price'>
              {this.props.info.priceCurrent}
            </view>
          </view>
        </view>
        <view className='title'>{this.props.info.title}</view>
        <view className='content'>
          <view className='content-wrapper'>{this.props.info.context}</view>
          <view
            className='find-more'
            onClick={() =>
              Taro.navigateTo({
                url: "/pages/trade/TradeDetail/index"
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
          <view onClick={this.handleStar} className='button'>
            <Image className='icon' src={star} />
            <view className='count'>{this.props.info.starCount}</view>
          </view>
          <view className='button'>
            <Image className='icon' src={comment} />
            <view className='count'>{this.props.info.commentCount}</view>
          </view>
          <view className='button'>
            <Image className='icon' src={like} />
            <view className='count'>{this.props.info.likeCount}</view>
          </view>
        </view>
      </View>
    );
  }
}

export default Index;
