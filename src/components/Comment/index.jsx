import { Component } from "react";
import { View, Image, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";
import comment from "../../assets/comment.png";

export default class Comment extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  state = {
    comments: [
      {
        name: "小猴子",
        content: "不错不错",
        secondComments: [
          {
            name: "郭老师",
            content: "我看到了",
            thirdComments: [
              {
                name: "小狮子",
                atUsername: "郭老师",
                content: "哦哦！在哪儿？"
              }
            ]
          }
        ]
      },
      { name: "小猴子", content: "不错不错", secondComments: [] },
      { name: "小猴子", content: "不错不错", secondComments: [] }
    ]
  };

  render() {
    return (
      <View className="comment">
        <view className="comment-title">网友评论：</view>
        <view className="content-box">
          {this.state.comments.map((item, index) => (
            <view key={index} className="item">
              <view className="main-comment">
                <view className="user-name">{item.name}:</view>
                <view className="user-comment">{item.content}</view>
                <view className="comment-reply">
                  <Image className="icon" src={comment} />
                  {item.secondComments.length}
                </view>
              </view>
              <view
                className="second-comment"
                style={{ display: item.secondComments.length ? "" : "none" }}
              >
                {item.secondComments.map(
                  (secondCommentItem, secondCommentIndex) => (
                    <view
                      key={secondCommentIndex}
                      className="second-comment-item"
                    >
                      <view className="second-comment">
                        <view className="second-comment-user-name">
                          {secondCommentItem.name}:
                        </view>
                        <view className="second-comment-content">
                          {secondCommentItem.content}
                        </view>
                      </view>
                      {secondCommentItem.thirdComments.map(
                        (thirdCommentItem, thirdCommentIndex) => (
                          <view
                            key={thirdCommentIndex}
                            className="third-comment-item"
                          >
                            <view className="third-comment-user-name">
                              {thirdCommentItem.name}
                            </view>
                            回复
                            <view className="at-user-name">
                              @{thirdCommentItem.atUsername}:
                            </view>
                            <view className="third-comment-content">
                              {thirdCommentItem.content}
                            </view>
                          </view>
                        )
                      )}
                    </view>
                  )
                )}
              </view>
            </view>
          ))}
        </view>
        <view className="make-comment">
          <Input type="text" placeholder="请在此处输入评论" />
        </view>
      </View>
    );
  }
}
