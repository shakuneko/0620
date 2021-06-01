import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header" 
import Shopproduct from "../components/Shopproduct" 
import AppFooter from "../components/Footer" 
import { StoreContext } from "../store"



const {Header,Content,Footer} = Layout;

function Shop(){
    const { title } = useContext(StoreContext);
   
    return(
        <div>
        <Layout className=" main-layout">
            <Header className="layout-header">
                <AppHeader title={title}/>
            </Header>
            <Content classNmae="layout-content">
                <Shopproduct />
            </Content>
        </Layout> 
        <Layout>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
        </Layout>
        </div>
   

    );
}
export default Shop;