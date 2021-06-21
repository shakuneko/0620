import { Layout } from "antd";
import OrderHeader from "../components/OrderHeader";
import OrderCard from "../components/OrderCard";
import AppFooter from "../components/Footer";
const { Header, Content, Footer } = Layout;

function Order({ match }) {
   return (
    <Layout className="main-layout">
      <Layout className="main-area">
        <Header className="layout-header">
          <OrderHeader title={` ${match.params.orderId}`} />
        </Header>
        <Content className="order-content">
           <OrderCard orderId={match.params.orderId} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Order;