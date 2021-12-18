import { Component } from "react";
import { View, Input, Picker, Image, Textarea } from "@tarojs/components";
import { AtImagePicker } from "taro-ui";
import arrowDown from "../../assets/arrow-down.png";

import "./index.less";
import "./index.scss";

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  state = {
    title: "时间简史",
    content: `在当当网上购入，是霍金先生的一本著作。虽然霍金先生把物理学变得简单了，但是碍于专业知识不够，就没有阅读下去，闲置很久了，所以想出给一个想读它的人。`,
    tag: "二手交易",
    tradeInfo: {
      originPrice: 56,
      currentPricd: 30,
      brandNew: 10
    },
    lostInfo: {
      position: "西十二N404"
    },
    selector: ["9成新", "8成新", "7成新", "5成新", "凑合能用"],
    selectorChecked: "",
    pictures: []
  };

  render() {
    return (
      <View className="publish-page">
        <view className="detail-box">
          <view className="title">
            <Input
              type="text"
              placeholder="请输入发布标题"
              placeholderStyle="font-weight: normal"
            />
          </view>
          <view className="content">
            <Textarea placeholder="请输入发布内容" />
          </view>
          <AtImagePicker
            files={this.state.pictures}
            onChange={files => this.setState({ pictures: files })}
            count={9}
            length={3}
          />
        </view>
        <view className="select-box">
          <view className="title">添加标签#</view>
          <view className="tags">
            <view
              className="tag"
              style={{
                backgroundColor: this.state.tag === "二手交易" ? "#ddffbc" : ""
              }}
              onClick={() => this.setState({ tag: "二手交易" })}
            >
              二手交易
            </view>
            <view
              className="tag"
              style={{
                backgroundColor: this.state.tag === "失物招领" ? "#ddffbc" : ""
              }}
              onClick={() => this.setState({ tag: "失物招领" })}
            >
              失物招领
            </view>
            <view
              className="tag"
              style={{
                backgroundColor: this.state.tag === "求助捞人" ? "#ddffbc" : ""
              }}
              onClick={() => this.setState({ tag: "求助捞人" })}
            >
              求助捞人
            </view>
          </view>
          <view className="option-box">
            {this.state.tag === "二手交易" ? (
              <view className="trade-option">
                <view className="trade-item">
                  原价
                  <Input type="number" maxlength={6} placeholder="原价" />
                </view>
                <view className="trade-item">
                  现价
                  <Input type="number" maxlength={6} placeholder="现价" />
                </view>
                <view className="trade-item">
                  几成新
                  <Picker
                    mode="selector"
                    range={this.state.selector}
                    onChange={event =>
                      this.setState({
                        selectorChecked: this.state.selector[event.detail.value]
                      })
                    }
                  >
                    <view className="picker">
                      {this.state.selectorChecked}
                      <Image className="icon" src={arrowDown} />
                    </view>
                  </Picker>
                </view>
              </view>
            ) : this.state.tag === "失物招领" ? (
              <view className="lost-option">
                <view className="title">丢失地点：</view>
                <Input type="text" placeholder="请输入丢失地点" />
              </view>
            ) : (
              <view className="help-option"></view>
            )}
          </view>
          <view className="publish-button">确认发布</view>
        </view>
      </View>
    );
  }
}

export default Index;
