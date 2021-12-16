import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import CollectionCard from "./CollectionCard/index";
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
    collections: [
      {
        avatarUrl: avatar,
        name: "小狮子",
        type: "二手交易",
        title: "九成新手写笔"
      },
      {
        avatarUrl: avatar,
        name: "小狮子",
        type: "二手交易",
        title: "九成新手写笔"
      },
      {
        avatarUrl: avatar,
        name: "小狮子",
        type: "二手交易",
        title: "九成新手写笔",
        imageUrl:
          "https://p2.img.cctvpic.com/photoAlbum/photo/2021/12/16/PHOT22GYZGo6eqhAOwJGRvXl211216_320x320.jpg"
      },
      {
        avatarUrl: avatar,
        name: "小狮子",
        type: "二手交易",
        title: "九成新手写笔"
      }
    ]
  };

  render() {
    return (
      <View className="collection-page">
        <view className="title">我的收藏</view>
        <view className="content">
          {this.state.collections.map((item, index) => (
            <CollectionCard key={index} info={item} />
          ))}
        </view>
      </View>
    );
  }
}

export default Index;
