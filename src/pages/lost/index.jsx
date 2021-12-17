import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import LostCard from "./LostCard/index";
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
    publisheds: [
      {
        content:
          "这里是文本，三开放竞赛很久哈赛佛湖戳赛神戳时偶尔扥红藕产妇戳记欧辰",
        type: "二手交易",
        title: "这里是标题",
        name: "时尚买手某某某某",
        avatarUrl: avatar,
        fansCount: 50,
        commentCount: 10,
        position: "西十二N404"
      },
      {
        content:
          "这里是文本，三开放竞赛很久哈赛佛湖戳赛神戳时偶尔扥红藕产妇戳发三道岭反三扥几哈宠物而很欧金额我翻欧盘坡陈炯ad烦哦产额扥屁哦静安寺开机费破产玩儿OA三扥戳阿囧扥禅茶欧三扥近岸塞防奥黑而佛哈偶尔往返破产王二富婆破asJD佛教asof地接熬出去单发黑恶喷哦哈破we陈火车纠缠而非戳记欧查囧扥哈海富瓦尔阿佛禅发哦看地好疼啊儿还能asJD佛禅切成玩吉尔or很难赛看覅记欧辰",
        type: "二手交易",
        title: "这里是标题",
        name: "时尚买手某某某某",
        avatarUrl: avatar,
        fansCount: 50,
        commentCount: 10,
        position: "西十二N404"
      }
    ]
  };

  render() {
    return (
      <View className="lost-page">
        <view className="title">失物招领</view>
        <view className="content">
          {this.state.publisheds.map((item, index) => (
            <LostCard key={index} info={item} />
          ))}
        </view>
      </View>
    );
  }
}

export default Index;
