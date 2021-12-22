import { Component } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Button, Text, Image } from "@tarojs/components";
import SearchBar from "../../components/SearchBar";
import Banner from "../../components/Banner";
import LoginWrap from "../../components/LoginWrap";
import Mine from "./Mine";
import "./index.less";
import Home from "../../assets/home.png";
import HomeActive from "../../assets/home-active.png";
import Publish from "../../assets/publish.png";
import PublishActive from "../../assets/publish-active.png";
import User from "../../assets/user.png";
import UserActive from "../../assets/user-active.png";
import MiddleNav from "./MiddleNav";
import { getAllDisscussions } from '../../api';
import Gallery from '../../components/Gallery';
// import { needLogin } from "../../utils/request";
import {
  asyncLogin,
  login,
  logout,
  asyncGetUserInfo,
} from "../../actions/user";

// @connect(
//   ({ user }) => ({
//     isLogin: user.isLogin,
//   }),
// )
@connect(
  ({ user }) => ({
    isLogin: user.isLogin,
    userInfo: user.userInfo,
  }),
  (dispatch) => ({
    login(afterLogin) {
      dispatch(login(afterLogin));
    },
    logout() {
      dispatch(logout());
    },
  })
)
class Index extends Component {
  state = {
    activeTabIndex: 0
  };

  componentDidMount() {
    const isLogin = Taro.getStorageSync("user_id") ? true : false;
    // const expired = this.$router.params.expired;
    // if (expired === "1") {
    //   // console.log('expire')
    //   Taro.showToast({
    //     title: "登录已过期",
    //     icon: "none",
    //     duration: 2000,
    //   });
    //   this.props.logout();

    //   return;
    // }
    
    if(isLogin) {
      this.props.login()
    } else {
      this.props.logout()
      Taro.navigateTo({
        url: '/pages/auth/index'
      })
    }
    // getAllDisscussions({discussionID:-1}) // TODO:
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleTabClick(index) {
    this.setState({
      activeTabIndex: index
    });
  }

  toPublishPage() {
    Taro.navigateTo({
      url: "/pages/publish/index"
    });
  }
  
  toLoginPage() {
    Taro.navigateTo({
      url: "/pages/login/index"
    })
  }

  render() {
    const { activeTabIndex } = this.state;
    return (
      <View className='index'>
        {activeTabIndex === 0 && (
          <View className='home'>
            <SearchBar></SearchBar>
            <Banner></Banner>
            <MiddleNav></MiddleNav>
            <Gallery></Gallery>
            {/* <View
              onClick={() =>
                Taro.navigateTo({
                  url: "/pages/login/index"
                })
              }
            >
              loginButton
            </View> */}
          </View>
        )}
        {activeTabIndex === 2 && <Mine></Mine>}
        <View className='bottom-tab'>
          <View
            className={["tab-item", activeTabIndex === 0 ? "active" : ""]}
            onClick={() => this.handleTabClick(0)}
          >
            <Image src={activeTabIndex === 0 ? HomeActive : Home}></Image>
            <Text>首页</Text>
          </View>
          {/* <LoginWrap afterLogin={this.toPublishPage}> */}
          <View
            onClick={this.toPublishPage}
            className={["tab-item", activeTabIndex === 1 ? "active" : ""]}
          >
            <Image src={activeTabIndex === 1 ? PublishActive : Publish}></Image>
            <Text>发布</Text>
          </View>
          {/* </LoginWrap> */}
          {/* <LoginWrap afterLogin={() => this.handleTabClick(2)}> */}
          <View
            onClick={() => this.handleTabClick(2)}
            className={["tab-item", activeTabIndex === 2 ? "active" : ""]}
          >
            <Image src={activeTabIndex === 2 ? UserActive : User}></Image>
            <Text>我的</Text>
          </View>
          {/* </LoginWrap> */}
        </View>
      </View>
    );
  }
}

export default Index;
