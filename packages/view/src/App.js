import { Icon, Layout } from "antd";
import React, { Component } from "react";
import CustomFooter from "./components/common/CustomFooter";

const { Header, Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout className="main-layout">
        <Header className="header-title">
          <Icon type="fund" style={{ fontSize: "38px", marginRight: "9px" }} />
          Portfolio Tracking
        </Header>
        <Content>
          <CumulativeDisplay />
        </Content>
        <CustomFooter />
      </Layout>
    );
  }
}

export default App;
