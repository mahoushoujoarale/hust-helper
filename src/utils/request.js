
import Taro from "@tarojs/taro";
import { camelizeKeys } from "humps";

export const request = (method) => (config) =>
  new Promise((resolve, reject) => {
    const success = (res) => {
      console.log("success", res);
      if (res.statusCode === 401) {
        Taro.setStorageSync("token", "");
        Taro.redirectTo({
          url: "/pages/index/index?expired=1",
        });
        // Taro.hideLoading();
      } else if (res.statusCode !== 200) {
        // Taro.hideLoading();
        Taro.showToast({
          icon: "none",
          title: res.err_msg || "网络错误，请检查网络",
          duration: 2000,
        });
      } else {
        // Taro.hideLoading();
        console.log("camelizedkey", camelizeKeys(res.data));

        resolve(camelizeKeys(res.data));
      }
    };

  const fail = (err) => {
    console.log("fail", err);
    Taro.hideLoading();
    Taro.showToast({
      icon: "none",
      title: err.message || "网络错误，请检查网络",
      duration: 2000,
    });
    reject(err);
  };

  // Taro.showLoading({
  //   title: "加载中",
  // });

  Taro.request({
    method,
    success: success,
    fail: fail,
    header: {
      "content-type": "application/json",
    },
    ...config,
  });
});

export const requestWithToken = (method) => (config) => {
  const token = Taro.getStorageSync("token");
  console.log(token);

  return request(method)({
    ...config,
    header: {
      Authorization: `Bearer ${token ? token : "none"}`,
      "content-type": "application/json",
    },
  });
};