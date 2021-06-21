import { Layout } from "antd";
import * as QueryString from "query-string";

import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import RegisterCard from "../components/RegisterCard";

const { Header, Content, Footer } = Layout;

function Register(props) {
  const { redirect } = QueryString.parse(props.location.search);
  return (
    <Layout className=" main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Register Page" />
        </Header>
        <Content className="layout-content">
        <div className="Register-title">Register</div>
        <div  className="Login-content-sm">
          <RegisterCard redirect={redirect} />
          </div>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Register;