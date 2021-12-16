import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import price from "../../../assets/price.png";
import star from "../../../assets/star.png";
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
      <View className="notice-page-card">
        <view className="header">
          <view className="type">{this.props.info.type}</view>
          <view className="price">
            <Image className="price-icon" src={price} />
            <view className="origin-price">{this.props.info.originPrice}</view>
            <view className="current-price">
              {this.props.info.currentPrice}
            </view>
          </view>
        </view>
        <view className="title">{this.props.info.title}</view>
        <view className="content">
          <view className="content-wrapper">{this.props.info.content}</view>
          <view className="find-more">查看更多</view>
        </view>
        {this.props.info.imageUrl ? (
          <Image className="preview-pic" src={this.props.info.imageUrl} />
        ) : (
          <view style={{ height: "30Px" }}></view>
        )}
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
