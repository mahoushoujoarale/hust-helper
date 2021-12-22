import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import Avatar from '../../../assets/my-avatar.png'
import "./index.less";

class Index extends Component {
  state = {
    types: ['求助捞人', '失物招领', '二手交易']
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View
        className='collection-page-card'
        onClick={() =>
          Taro.navigateTo({
            url: "/pages/trade/TradeDetail/index"
          })
        }
      >
        <view className='top'>
          <view
            className='user-photo'
            style={{ backgroundImage: this.props.info.authorAvator }}
            // style={{ backgroundImage: Avatar }}
          ></view>
          <view className='content-box'>
            <view className='name'>{this.props.info.authorName}</view>
            <view className='tags'>
              <view className='tag'>{this.props.info.title}</view>
              <view className='tag'>#{this.state.types[this.props.info.type]}</view>
            </view>
          </view>
        </view>
        {this.props.info.imageUrl ? (
          <Image className='preview-pic' src={this.props.info.imageUrl} />
        ) : (
          <></>
        )}
      </View>
    );
  }
}

export default Index;
