import { useEffect,useContext } from "react";
import Cookie from "js-cookie"
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { addCartItem } from "../action";
import { ShoppingCartOutlined  } from '@ant-design/icons';


export default function AddToCart() {
  // const { dispatch } = useContext(StoreContext);
  // const { state: { cartItems }} = useContext(StoreContext);
  const { state: { cartItems, productDetail: { product,qty,col } }, dispatch } = useContext(StoreContext);

  

  const openNotification = () => {
    notification.open({
      placement: 'bottomRight',
      message: `Your Cart ` ,
      description:
      `You just add ${qty} ${qty>1?" ":" "}  ${product.name} to your cart.`,
      icon:<ShoppingCartOutlined style={{ color: '#108ee9' }} />
     
    
      
    });
  }; 
      const addToCart = () => {
        openNotification();
        addCartItem(dispatch, product, qty,col);
      };

      useEffect(()=>{
        Cookie.set("cartItems", JSON.stringify(cartItems));
       }, [cartItems])

      return (
        <Button type="primary" className="btn-tocar" onClick={addToCart}>
          Add To Cart
        </Button>
      );
}