import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
const { Header, Content, Footer } = Layout;

function Profile() {
  return (
    <Layout className=" main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Profile Page" />
        </Header>
        <Content className="Profile-content">
        <div className="Login-content-title">Profile</div>
          <ProfileCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Profile;