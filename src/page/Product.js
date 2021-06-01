import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import { setProductDetail } from "../action";
import { StoreContext } from "../store"
// import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function Product({ match }) {
   const { dispatch } = useContext(StoreContext);
   // const product = products.find(
   //    (x) => x.id === match.params.productId
   // );
   useEffect(() => {
      setProductDetail(dispatch, match.params.productId, 0, match.params.category)
   }, [])
   return (
      <Layout className=" main-layout">
         <Header className="layout-header">
            <AppHeader title="Product Detail"/>
         </Header>
         <Content className="layout-content">
            <ProductDetail />
         </Content>
         <Footer className="layout-footer">
            <AppFooter />
         </Footer>
      </Layout>
   );
}

export default Product;