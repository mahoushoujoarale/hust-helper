import Taro from "@tarojs/taro";
import { LOGIN, LOGOUT, GET_USER_INFO } from "../constants/user";
import { getUserInfo as fetchUserInfo } from "../api/index";
import { login as fetchLogin } from "../api/user";

export const login = () => {
  return {
    type: LOGIN,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// 异步的action
export const asyncMailLogin = (afterLogin, info) => {
  return (dispatch) => {
    // fetchLogin(info).then((data) => {
      // 设置时间戳，方便以后定位更新
      console.log('info', info)
      Taro.setStorageSync("time_stamp", new Date().getTime() / 1000);
      // Taro.setStorageSync("openid", data.openid);

      Taro.setStorage({
        // key: "token",
        // data: data.jwtToken,
        key: "user_id", // TODO:
        data: info.user_id
      }).then(() => {
        dispatch(login());
        afterLogin();
      });
    // });
  };
};

// 异步的action
export const asyncLogin = (afterLogin, info) => {
  return (dispatch) => {
    fetchLogin(info).then((data) => {
      // 设置时间戳，方便以后定位更新
      Taro.setStorageSync("time_stamp", new Date().getTime() / 1000);
      Taro.setStorageSync("openid", data.openid);

      Taro.setStorage({
        key: "token",
        data: data.jwtToken,
      }).then(() => {
        dispatch(login());
        afterLogin();
      });
    });
  };
};

export const getUserInfo = (userInfo = {}) => {
  return {
    type: GET_USER_INFO,
    userInfo: userInfo,
  };
};

export const asyncGetUserInfo = () => {
  return (dispatch) => {
    fetchUserInfo({ id: Taro.getStorageSync("openid") }).then((data) => {
      dispatch(getUserInfo(data.info));
    });
  };
};

export function asyncLogout() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, 2000);
  };
}
