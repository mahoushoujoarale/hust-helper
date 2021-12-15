import Taro from "@tarojs/taro";
import { login as loginWx, getUser } from "./index";

export async function login(info) {
  const { code } = await Taro.login();

  const {
    userInfo,
    rawData,
    signature,
    encryptedData,
    iv,
  } = info;
  const data = {
    rawData,
    signature,
    encryptedData,
    iv,
    code,
    userInfo,
  };

  return await loginWx(data);
}
