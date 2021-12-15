import Taro from "@tarojs/taro";

export const previewImage = (img, imgs) => {
  Taro.previewImage({
    current: img,
    urls: imgs,
  });
};
