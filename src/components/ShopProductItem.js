import {useContext} from "react";
import {Card}from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../store";
import { setProductDetail } from "../action";

export default function ShopProductItem( { product }) {
    const { dispatch } = useContext(StoreContext);
    return (
        <Card className="shop-product">
            <Link  to={`/product/${product.id}`}
                onClick={() =>{
                    setProductDetail(dispatch,product.id,1);
                }}>
                <img 
                    className="product-pic"
                    src={product.image}
                    alt={product.alt} />
            </Link>
            <div className="product-info">
                <h5>
                    {product.name}
                </h5>
                <p>
                    {product.author}
                </p>
            </div>
        </Card>
    );
}