import Taro from "@tarojs/taro";
import { request, requestWithToken } from "../utils/request";
import routers from "./routers";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

const host = 'https://xxx.xxx.xxx.xxx'
const ver = '/api/vx';

function getUrl(router) {
  return `${host}${ver}${router}`;
}

export const login = (data) =>
  request(POST)({
    url: getUrl(routers.login),
    data: {
      ...data,
    },
  });

export const getUserInfo = (data) =>
  requestWithToken(GET)({
    url: getUrl(routers.getUserInfo),
    data,
});
