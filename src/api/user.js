import Taro from "@tarojs/taro";
import { login as loginWx, getUser , getUserInfo as fetchUserInfo } from "./index";

export async function login(info) {
  const { code } = await Taro.login();
  const {
    userInfo,
    // rawData,
    // signature,
    encryptedData,
    iv,
  } = info;
  const data = {
    // rawData,
    // signature,
    encryptedData,
    iv,
    code,
    // userInfo,
    nickname: userInfo.nickname,
    avatar_url: userInfo.avatar_url,
  };
  console.log('wx code', code)
  console.log('user data', data)

  return await loginWx(data);
}
