import { Component } from "react";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import "./index.less";

import GalleryImg0 from "../../assets/gallery0.jpg";
import GalleryImg1 from "../../assets/gallery1.jpg";
import GalleryImg2 from "../../assets/gallery2.jpg";

export default class Gallery extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='gallery'>
        <Image mode='widthFix' className='left'src={GalleryImg0}></Image>
        <View className='right'>
          <Image mode='widthFix' src={GalleryImg1}></Image>
          <Image mode='widthFix' src={GalleryImg2}></Image>
        </View>
      </View>
    );
  }
}
