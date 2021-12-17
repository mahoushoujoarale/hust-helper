// 通过类型返回对应二路由
export function getUrlByType(type) {
  if (type === "二手交易") return "/pages/trade/TradeDetail/index";
  if (type === "求助捞人") return "/pages/help/HelpDetail/index";
  if (type === "失物招领") return "/pages/lost/LostDetail/index";
  return "";
}
