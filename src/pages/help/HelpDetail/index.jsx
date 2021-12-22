import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import star from "../../../assets/star.png";
import comment from "../../../assets/comment.png";
import like from "../../../assets/good-job.png";
import caution from "../../../assets/caution.png";
import avatar from "../../../assets/avatar.png";
import Comment from "../../../components/Comment";

import "./index.less";

class Index extends Component {
  state = {
    content:
      "这里是文本，三开放竞赛很久哈赛赛很看桑扥兰has单方拉斯晒放出味儿很欧茶海就很爱看赛很累几哈所扥上奥赛神火艾合富哈偶臭味儿深海色看好阿尔换绰号很欧查杀桑扥戳as还佛茶素海佛茶素党风戳爱上桑扥戳as还发长哦埃塞很哦茶桑扥奥冲赴海外嗯哦爱神寒假号桌差速很戳上诶富虹大矿很出我饿哦呵欧查商赛佛刹守丧扥戳上岸赛肯江洪濑方案二oh人偶长城of插件红扥哦哈四海法苏等奥赛很欧佛茶赛很皮奥苏海峰怕符合付红俺爹很怕狠蛇很跨唠会批号佛湖戳赛神戳时偶尔扥红藕产妇戳记欧辰",
    title: "这里是标题",
    name: "时尚买手某某某某",
    avatarUrl: avatar,
    picUrls: [
      "https://p2.img.cctvpic.com/photoAlbum/photo/2021/12/16/PHOT22GYZGo6eqhAOwJGRvXl211216_320x320.jpg",
      "https://p2.img.cctvpic.com/photoAlbum/photo/2021/12/16/PHOT22GYZGo6eqhAOwJGRvXl211216_320x320.jpg",
    ],
    fansCount: 50,
    starCount: 10,
    commentCount: 10,
    likeCount: 10
  };
  
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  
  componentWillUnmount() {}

  onLoad(options) {
    const detail = JSON.parse(options.detail)
    console.log('load', detail)
    this.setState({
      name: detail.authorName,
      title: detail.title,
      content: detail.context,
      fansCount: detail.starredNumber,
      starCount: detail.starredNumber,
      likeCount: detail.goodNumber,
      commentCount: detail.comment? detail.comment.length: 0
    })
  }
  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <View className='help-detail-page'>
        <view className='title'>求助捞人</view>
        <view className='content'>
          <View className='help-detail-page-card'>
            <view className='header'>
              <Image className='user-photo' src={this.state.avatarUrl} />
              <view className='user-info'>
                <view className='user-name'>{this.state.name}</view>
                <view className='user-fans'>{this.state.fansCount}订阅量</view>
              </view>
              <view className='follow-button'>收藏</view>
            </view>
            <view className='title'>{this.state.title}</view>
            <view className='content'>
              <view className='content-wrapper'>{this.state.content}</view>
              <view className='pictures'>
                {this.state.picUrls.map((item, index) => (
                  <Image key={index} className='picture' src={item} />
                ))}
              </view>
            </view>
            <view className='report'>
              <Image className='icon' src={caution} />
              举报
            </view>
          </View>
          <view className='buttons'>
            <view className='button'>
              <Image className='icon' src={star} />
              <view className='count'>{this.state.starCount}</view>
            </view>
            <view className='button'>
              <Image className='icon' src={comment} />
              <view className='count'>{this.state.commentCount}</view>
            </view>
            <view className='button'>
              <Image className='icon' src={like} />
              <view className='count'>{this.state.likeCount}</view>
            </view>
          </view>
        </view>
        <Comment />
      </View>
    );
  }
}

export default Index;
