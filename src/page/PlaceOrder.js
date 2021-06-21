import { Layout } from "antd";
import ShippingHeader from "../components/ShippingHeader";
import PlaceOrderCard from "../components/PlaceOrderCard";
import AppFooter from "../components/Footer";
const { Header, Content, Footer } = Layout;

function PlaceOrder() {
  return (
    <Layout className="main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <ShippingHeader className="Login-content-title" title="Place Order" step1 step2 step3  />
        </Header>
        <Content className="PlaceOrder-content">
          <div className="PlaceOrder-content-sm">
           <PlaceOrderCard />
           </div>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default PlaceOrder;