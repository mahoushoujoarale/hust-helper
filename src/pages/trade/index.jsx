import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import TradeCard from "./TradeCard/index";
import avatar from "../../assets/avatar.png";
import { getAllDisscussions } from '../../api';

import "./index.less";

class Index extends Component {
  state = {
    discussion: []
  }

  async componentDidMount() {
    let {discussion} = await getAllDisscussions({discussionID: -1})
    discussion = discussion || []
    discussion = discussion.filter((item) => item.type === '2')
    console.log('help discussion', discussion)
    this.setState({
      discussion
    })
  }
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // state = {
  //   discussion: [
  //     {
  //       content:
  //         "这里是文本，三开放竞赛很久哈赛佛湖戳赛神戳时偶尔扥红藕产妇戳记欧辰",
  //       name: "时尚买手某某某某",
  //       avatarUrl: avatar,
  //       fansCount: 50,
  //       title: "这里是标题",
  //       originPrice: 250,
  //       currentPrice: 90,
  //       starCount: 10,
  //       commentCount: 10,
  //       likeCount: 10
  //     },
  //     {
  //       content:
  //         "这里是文本，三开放竞赛很久哈赛佛湖戳赛ahdfkjhasdjkhflkjasdhfjlhsadfkjhsdjfh方框赛罕茯苓窘境带领反差赛季法令囧ad领翻领as单反零结案赛铃翻看赛灵泛神戳时偶尔扥红藕产妇戳记欧辰",
  //       name: "时尚买手某某某某",
  //       avatarUrl: avatar,
  //       fansCount: 50,
  //       title: "这里是标题",
  //       originPrice: 250,
  //       currentPrice: 90,
  //       starCount: 10,
  //       commentCount: 10,
  //       likeCount: 10,
  //       imageUrl:
  //         "https://p2.img.cctvpic.com/photoAlbum/photo/2021/12/16/PHOT22GYZGo6eqhAOwJGRvXl211216_320x320.jpg"
  //     },
  //     {
  //       content:
  //         "这里是文本，三开放竞赛很久哈赛佛湖戳赛神戳时偶尔扥红藕产妇戳记欧辰",
  //       name: "时尚买手某某某某",
  //       avatarUrl: avatar,
  //       fansCount: 50,
  //       title: "这里是标题",
  //       originPrice: 250,
  //       currentPrice: 90,
  //       starCount: 10,
  //       commentCount: 10,
  //       likeCount: 10,
  //       imageUrl:
  //         "https://p2.img.cctvpic.com/photoAlbum/photo/2021/12/16/PHOT22GYZGo6eqhAOwJGRvXl211216_320x320.jpg"
  //     }
  //   ]
  // };

  render() {
    return (
      <View className='trade-page'>
        <view className='title'>二手交易</view>
        <view className='content'>
          {this.state.discussion.map((item, index) => (
            <TradeCard key={index} info={item} />
          ))}
        </view>
      </View>
    );
  }
}

export default Index;
