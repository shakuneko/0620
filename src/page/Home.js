  
import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header" 
import ProductList from "../components/ProductList" 
import AppFooter from "../components/Footer" 
import { StoreContext } from "../store"
import { getTitle } from "../utils";
import { setPage } from "../action";


const {Header,Content,Footer} = Layout;

function Home(){
    const { state: { page: { title } }, dispatch } = useContext(StoreContext);
    useEffect(() => {
        const url = window.location.pathname;
        setPage(dispatch,url, getTitle(url))
      }, []);
    return(
        <div>
        <Layout className=" main-layout">
            <Header className="layout-header">
                <AppHeader title={title}/>
            </Header>
            <Content className="layout-content">
                <ProductList />
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
export default Home;