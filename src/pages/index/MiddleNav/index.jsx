import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";

import "./index.less";
import Help from "../../../assets/help.png";
import Lost from "../../../assets/lost.png";
import Trade from "../../../assets/trade.png";
import Taro from "@tarojs/taro";

export default class MiddleNav extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const tags = ["求助捞人", "失物招领", "二手交易"];
    const urlTags = ["help", "lost", "trade"];

    return (
      <View className='middle-nav'>
        <View
          onClick={() =>
            Taro.navigateTo({
              url: `/pages/${urlTags[0]}/index`
            })
          }
          className='nav-item'
        >
          <Image src={Help}></Image>
          <Text>{tags[0]}</Text>
        </View>
        <View
          onClick={() =>
            Taro.navigateTo({
              url: `/pages/${urlTags[1]}/index`
            })
          }
          className='nav-item'
        >
          <Image src={Lost}></Image>
          <Text>{tags[1]}</Text>
        </View>
        <View
          onClick={() =>
            Taro.navigateTo({
              url: `/pages/${urlTags[2]}/index`
            })
          }
          className='nav-item'
        >
          <Image src={Trade}></Image>
          <Text>{tags[2]}</Text>
        </View>
      </View>
    );
  }
}
