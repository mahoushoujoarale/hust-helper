import { Component } from "react";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import "./index.less";

import BannerImg0 from "../../assets/banner0.png";
import BannerImg1 from "../../assets/banner1.png";
import BannerImg2 from "../../assets/banner2.jpg";

export default class Banner extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props, nextProps);
  // }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Swiper
        className='banner'
        indicatorColor='#fff'
        indicatorActiveColor='#fff'
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image mode='widthFix' src={BannerImg0}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image mode='widthFix' src={BannerImg1}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image mode='widthFix' src={BannerImg2}></Image>
        </SwiperItem>
      </Swiper>
    );
  }
}
