import { Layout } from "antd";
import ShippingHeader from "../components/ShippingHeader";
import AppFooter from "../components/Footer";
import ShippingAddressCard from "../components/ShippingCard";
const { Header, Content, Footer } = Layout;

function Shipping() {
  return (
    <Layout className=" main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <ShippingHeader className="shipping-title" title="Shipping" step1  />
        </Header>
        <Content className="Shipping-content">
          <ShippingAddressCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Shipping;