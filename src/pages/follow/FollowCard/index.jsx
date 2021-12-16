import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import male from "../../../assets/male.png";
import female from "../../../assets/female.png";

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
      <View className="follow-page-card">
        <view
          className="user-photo"
          style={{ backgroundImage: this.props.info.avatarUrl }}
        ></view>
        <view className="content-box">
          <view className="name">{this.props.info.name}</view>
          <Image
            className="gender"
            src={this.props.info.gender === 0 ? male : female}
          />
        </view>
      </View>
    );
  }
}

export default Index;
