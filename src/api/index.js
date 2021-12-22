import Taro from "@tarojs/taro";
import { request, requestWithToken } from "../utils/request";
import routers from "./routers";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

const host = 'http://121.37.70.179:8080'
const ver = '/api';

function getUrl(router) {
  return `${host}${ver}${router}`;
}

export const login = (data) =>
  request(POST)({
    url: getUrl(routers.getToken),
    data: {
      ...data,
    },
  })

export const getUserToken = (data) =>
  request(POST)({
    url: getUrl(routers.getToken),
    data,
})

export const getUserInfo = (data) =>
  requestWithToken(GET)({
    url: getUrl(routers.getUserInfo),
    data,
})

export const getAllDisscussions = (data) =>
  request(GET)({
    url: getUrl(routers.getAllDisscussions),
    data: {
      ...data,
    }
  })

export const getMyDisscussions = (data) =>
request(GET)({
  url: getUrl(routers.getMyDisscussions),
  data: {
    ...data,
  }
})

export const postUserMail = (data) =>
  request(POST)({
    url: getUrl(routers.postUserMail),
    data,
})

export const postNewUser = (data) =>
  request(POST)({
    url: getUrl(routers.postNewUser),
    data,
})


export const starDiscussion = (data) =>
  request(POST)({
    url: getUrl(routers.starDiscussion),
    data,
})

export const goodDiscussion = (data) =>
  request(POST)({
    url: getUrl(routers.goodDiscussion),
    data,
})

export const postHelp = (data) =>
  request(POST)({
    url: getUrl(routers.postHelp),
    data,
})
export const postLost = (data) =>
  request(POST)({
    url: getUrl(routers.postHelp),
    data,
})
export const postTrade = (data) =>
  request(POST)({
    url: getUrl(routers.postHelp),
    data,
})



