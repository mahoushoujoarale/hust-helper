import { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";

import "./index.less";

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="publish-page"></View>;
  }
}

export default Index;
