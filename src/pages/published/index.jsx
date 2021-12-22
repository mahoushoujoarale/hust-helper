import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import PublishedCard from "./PublishedCard/index";

import "./index.less";
import { getDisscussionByID } from '../../api';

class Index extends Component {
  
  state = {
    discussions: [
      // {
      //   content:
      //     "这里是文本，三开放竞赛很久哈赛佛湖戳赛神戳时偶尔扥红藕产妇戳记欧辰",
      //   type: "二手交易",
      //   title: "这里是标题",
      //   originPrice: 250,
      //   currentPrice: 90,
      //   starCount: 10,
      //   commentCount: 10,
      //   likeCount: 10
      // },
      // {
      //   content:
      //     "这里是文本，三开放竞赛很久哈赛佛湖戳赛ahdfkjhasdjkhflkjasdhfjlhsadfkjhsdjfh方框赛罕茯苓窘境带领反差赛季法令囧ad领翻领as单反零结案赛铃翻看赛灵泛神戳时偶尔扥红藕产妇戳记欧辰",
      //   type: "失物招领",
      //   title: "这里是标题",
      //   originPrice: 250,
      //   currentPrice: 90,
      //   starCount: 10,
      //   commentCount: 10,
      //   likeCount: 10,
      //   imageUrl:
      //     "https://p2.img.cctvpic.com/photoAlbum/photo/2021/12/16/PHOT22GYZGo6eqhAOwJGRvXl211216_320x320.jpg"
      // },
      // {
      //   content:
      //     "这里是文本，三开放竞赛很久哈赛佛湖戳赛神戳时偶尔扥红藕产妇戳记欧辰",
      //   type: "求助捞人",
      //   title: "这里是标题",
      //   originPrice: 250,
      //   currentPrice: 90,
      //   starCount: 10,
      //   commentCount: 10,
      //   likeCount: 10,
      //   imageUrl:
      //     "https://p2.img.cctvpic.com/photoAlbum/photo/2021/12/16/PHOT22GYZGo6eqhAOwJGRvXl211216_320x320.jpg"
      // }
    ]
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  onLoad = async(options) => {
    const discussionsArr = JSON.parse(options.discussionsArr)
    console.log('load arr', discussionsArr)
    discussionsArr.forEach(async (item) => {
      // console.log(item)
      const data = await getDisscussionByID({
        discussionID: item
      })
      this.setState({
        discussions: [...this.state.discussions, data.discussion[0]]
      })
      console.log('state', this.state.discussions)
    });
  }
  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='published-page'>
        <view className='title'>我的发布</view>
        <view className='content'>
          {this.state.discussions.map((item, index) => (
            <PublishedCard key={index} info={item} />
          ))}
        </view>
      </View>
    );
  }
}

export default Index;
