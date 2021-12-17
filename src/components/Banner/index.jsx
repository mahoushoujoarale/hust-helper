import { Component } from "react";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import "./index.less";

import BannerImg from "../../assets/banner.png";

export default class Banner extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Swiper
        className="banner"
        indicatorColor="#fff"
        indicatorActiveColor="#fff"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image src={BannerImg}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={BannerImg}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={BannerImg}></Image>
        </SwiperItem>
      </Swiper>
    );
  }
}
