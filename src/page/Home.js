  
import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header" 
import ProductList from "../components/ProductList" 
import AppFooter from "../components/Footer" 
import { StoreContext } from "../store"
// import { getTitle } from "../utils";
// import { pageContentsSet, activeNavItemSet } from "../action";
// import { getJSON } from "../api";


const {Header,Content,Footer} = Layout;

function Home(){
    const { title } = useContext(StoreContext);
    // useEffect(() => {
    //     const url = window.location.pathname;
    //     pageContentsSet(dispatch, getTitle(url), getJSON(url));
    //     activeNavItemSet(dispatch, url);
    //   }, []);
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