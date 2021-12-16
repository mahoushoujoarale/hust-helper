import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";

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
      <View className="collection-page-card">
        <view className="top">
          <view
            className="user-photo"
            style={{ backgroundImage: this.props.info.avatarUrl }}
          ></view>
          <view className="content-box">
            <view className="name">{this.props.info.name}</view>
            <view className="tags">
              <view className="tag">{this.props.info.title}</view>
              <view className="tag">#{this.props.info.type}</view>
            </view>
          </view>
        </view>
        {this.props.info.imageUrl ? (
          <Image className="preview-pic" src={this.props.info.imageUrl} />
        ) : (
          <></>
        )}
      </View>
    );
  }
}

export default Index;
