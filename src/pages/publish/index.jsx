import { Component, Fragment } from "react";
import { View, Input, Picker, Image, Textarea } from "@tarojs/components";
import { AtImagePicker } from "taro-ui";
import arrowDown from "../../assets/arrow-down.png";
import Taro from "@tarojs/taro";

import "./index.less";
import "./index.scss";
import { postHelp } from '../../api';

class Index extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props, nextProps);
  // }

  state = {
    // title: "时间简史",
    // content: `在当当网上购入，是霍金先生的一本著作。虽然霍金先生把物理学变得简单了，但是碍于专业知识不够，就没有阅读下去，闲置很久了，所以想出给一个想读它的人。`,
    title: '',
    content: '',
    tag: "二手交易",
    type: 2,
    tradeInfo: {
      origin: '',
      current: '',
      // brandNew: 10
    },
    lostInfo: {
      place: '',
      time: '',
    },
    selector: ["9成新", "8成新", "7成新", "5成新", "凑合用"],
    selectorChecked: "",
    pictures: []
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}


  async handlePublish() {
    const {type, title, content, pictures, lostInfo, tradeInfo} = this.state
    const userId = Taro.getStorageSync("user_id")
    const userName = Taro.getStorageSync("user_name")
    const gender = Taro.getStorageSync("gender")

    console.log('publish', this.state)
    postHelp({
      type: ''+ type,
      author_wxid: userId,
      author_name: userName,
      context: content,
      title,
      // picture: pictures[0]
      // lost
      lost_place: lostInfo.place,
      lost_time: lostInfo.time,
      // trade
      price_origin: tradeInfo.origin,
      price_current: tradeInfo.current
    })
    .then((data) => {
      Taro.showToast({
        title: "发布成功！",
        icon: "success",
        duration: 1000,
      });
      setTimeout(() => {
        Taro.reLaunch({
          url: "/pages/index/index",
        });
      }, 1000);
    })
    .finally(() => {
      Taro.hideLoading();
      this.setState({
        isPublish: false,
      });
    });
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.detail.value
    })
  }

  handleChangeContent = (e) => {
    this.setState({
      content: e.detail.value
    })
  }

  handleChangeOrigin = (e) => {
    this.setState({
      tradeInfo: {
        origin: e.detail.value,
        current: this.state.tradeInfo.current
      }
    })
  }

  handleChangeCurrent = (e) => {
    this.setState({
      tradeInfo: {
        origin: this.state.tradeInfo.origin,
        current: e.detail.value
      }
    })
  }

  handleChangePlace = (e) => {
    this.setState({
      lostInfo: {
        place: e.detail.value,
        time: this.state.lostInfo.time,
      }
    })
  }
  
  handleChangeTime = (e) => {
    this.setState({
      lostInfo: {
        time: e.detail.value,
        place: this.state.lostInfo.place,
      }
    })
  }
  


  render() {
    const {title, content, tradeInfo, lostInfo} = this.state

    return (
      <View className='publish-page'>
        <view className='detail-box'>
          <view className='title'>
            <Input
              value={title}
              onInput={this.handleChangeTitle}
              type='text'
              placeholder='请输入发布标题'
              placeholderStyle='font-weight: normal'
            />
          </view>
          <view className='content'>
            <Textarea
              value={content}
              onInput={this.handleChangeContent}
              placeholder='请输入发布内容'
            />
          </view>
          <AtImagePicker
            files={this.state.pictures}
            onChange={files => this.setState({ pictures: files })}
            count={9}
            length={3}
          />
        </view>
        <view className='select-box'>
          <view className='title'>添加标签#</view>
          <view className='tags'>
            <view
              className='tag'
              style={{
                backgroundColor: this.state.type === 2 ? "#ddffbc" : ""
              }}
              onClick={() => this.setState({ type: 2 })}
            >
              二手交易
            </view>
            <view
              className='tag'
              style={{
                backgroundColor: this.state.type === 1 ? "#ddffbc" : ""
              }}
              onClick={() => this.setState({type: 1 })}
            >
              失物招领
            </view>
            <view
              className='tag'
              style={{
                backgroundColor: this.state.type === 0 ? "#ddffbc" : ""
              }}
              onClick={() => this.setState({ type: 0 })}
            >
              求助捞人
            </view>
          </view>
          <view className='option-box'>
            {this.state.type === 2 ? (
              <view className='trade-option'>
                <view className='trade-item'>
                  原价
                  <Input value={tradeInfo.origin} onInput={this.handleChangeOrigin} type='number' maxlength={6} placeholder='原价' />
                </view>
                <view className='trade-item'>
                  现价
                  <Input value={tradeInfo.current} onInput={this.handleChangeCurrent} type='number' maxlength={6} placeholder='现价' />
                </view>
                <view className='trade-item'>
                  几成新
                  <Picker
                    mode='selector'
                    range={this.state.selector}
                    onChange={event =>
                      this.setState({
                        selectorChecked: this.state.selector[event.detail.value]
                      })
                    }
                  >
                    <view className='picker'>
                      {this.state.selectorChecked}
                      <Image className='icon' src={arrowDown} />
                    </view>
                  </Picker>
                </view>
              </view>
            ) : this.state.type === 1 ? (
              <Fragment>
                <view className='lost-option'>
                  <view className='title'>丢失地点：</view>
                  <Input value={lostInfo.place} onInput={this.handleChangePlace} type='text' placeholder='请输入丢失地点' />
                </view>
                <view className='lost-option'>
                  <view className='title'>丢失时间：</view>
                  <Input value={lostInfo.time} onInput={this.handleChangeTime} type='text' placeholder='请输入丢失时间' />
                </view>
              </Fragment>
            ) : (
              <view className='help-option'></view>
            )}
          </view>
          <view onClick={this.handlePublish.bind(this)} className='publish-button'>确认发布</view>
        </view>
      </View>
    );
  }
}

export default Index;
