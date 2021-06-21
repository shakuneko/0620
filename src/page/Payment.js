import { Layout } from "antd";
import ShippingHeader from "../components/ShippingHeader";
import PaymentMethodCard from "../components/PaymentMethodCard";
import AppFooter from "../components/Footer";
const { Header, Content, Footer } = Layout;

function Payment() {
  return (
    <Layout className=" main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <ShippingHeader title="Payment" step1 step2  />
        </Header>
        <Content className="Payment-content">
           <PaymentMethodCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Payment;