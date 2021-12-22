import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import HelpCard from "./HelpCard/index";
import avatar from "../../assets/avatar.png";
import { connect } from "react-redux";
import "./index.less";
import { getAllDisscussions } from '../../api';

class Index extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props, nextProps);
  // }
  state = {
    discussion: []
    // publisheds: [
    //   {
    //     content:
    //       "这里是文本，三开放竞赛很久哈赛佛湖戳赛神戳时偶尔扥红藕产妇戳记欧辰",
    //     title: "这里是标题",
    //     name: "时尚买手某某某某",
    //     avatarUrl: avatar,
    //     fansCount: 50,
    //     starCount: 10,
    //     commentCount: 10,
    //     likeCount: 10
    //   },
    //   {
    //     content:
    //       "这里是文本，三开放竞赛很久哈赛佛湖戳赛神戳时偶尔扥红藕产妇戳发三道岭反三扥几哈宠物而很欧金额我翻欧盘坡陈炯ad烦哦产额扥屁哦静安寺开机费破产玩儿OA三扥戳阿囧扥禅茶欧三扥近岸塞防奥黑而佛哈偶尔往返破产王二富婆破asJD佛教asof地接熬出去单发黑恶喷哦哈破we陈火车纠缠而非戳记欧查囧扥哈海富瓦尔阿佛禅发哦看地好疼啊儿还能asJD佛禅切成玩吉尔or很难赛看覅记欧辰",
    //     title: "这里是标题",
    //     name: "时尚买手某某某某",
    //     avatarUrl: avatar,
    //     fansCount: 50,
    //     starCount: 10,
    //     commentCount: 10,
    //     likeCount: 10
    //   }
    // ]
  };

  async componentDidMount() {
    let {discussion} = await getAllDisscussions({discussionID: -1})
    discussion = discussion || []
    discussion = discussion.filter((item) => item.type === '0')
    console.log('help discussion', discussion)
    this.setState({
      discussion
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}


  render() {
    return (
      <View className='help-page'>
        <view className='title'>求助捞人</view>
        <view className='content'>
          {this.state.discussion.map((item, index) => (
            <HelpCard key={index} info={item} />
          ))}
        </view>
      </View>
    );
  }
}

export default Index;
