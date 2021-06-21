
import { Layout } from "antd";
import * as QueryString from "query-string";

import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import LoginCard from "../components/LoginCard";

const { Header, Content, Footer } = Layout;

function Login(props) {
  const { redirect } = QueryString.parse(props.location.search);
  return (
    <Layout className=" main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Login Page" />
        </Header>
        <Content className="Login-content">
          <div className="Login-content-title">LOG IN</div>
          <div  className="Login-content-sm">
          <LoginCard redirect={redirect} />
          </div>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Login;