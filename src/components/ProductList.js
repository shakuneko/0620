import { useContext } from "react";
import ProductItem from "./ProductItem";
import DesignersItem from "./DesignersItem";
import designers from "../json/designer-info.json"
import {Row,Col}from "antd";
import { StoreContext } from "../store";

export default function ProductList(){
  const { state: { page: { products } } } = useContext(StoreContext);
    return(
      <div  className="product">
          <img alt="" className="header-pic"src="https://img.onl/u7zjYS"/>
            
            <div className="big-container">
              <div  className="text-center">
                <h4 >Hot Products</h4>
                <div className="more">
                  <p >More...</p>
                </div>
                <Row gutter={[32,32]}>
                  {products.map(product => (
                    <Col 
                      key={product.id}
                      xs={{span: 24}} 
                      sm={{ span: 12 }} 
                      lg={{ span: 8 }}
                      xl={{ span: 6 }}
                      xxl={{ span: 6 }}
                     
                    >
                      <ProductItem  product={product}/>
                    </Col>
                  ))}
                </Row>
                <h4 style={{ marginTop:"3rem" }}>Popular Designer</h4>
                <Row >
                  {designers.map(designer => (
                    <Col 
                    key={designer.id}
                    xxl={{ span: 24 }}
                    >
                      <DesignersItem designer={designer}/>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>

    </div>
    );
}