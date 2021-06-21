import { Modal, Button } from "antd";
import { useEffect, useContext } from "react";
import {  useHistory } from "react-router-dom";
import { createOrder } from "../action"
import { SmileOutlined  } from '@ant-design/icons';
import { StoreContext } from "../store"


export default function CartModal({ isModalVisible, toggleModal }) {
const { state: { cart, orderInfo: { loading, success, order } }, dispatch } = useContext(StoreContext);
   const { cartItems } = cart;
   const handleCancel = () => toggleModal(!isModalVisible);
   const history = useHistory();
   const checkoutHandler = () => {
    handleCancel();
    history.push("/");
 }

 const placeOrderHandler = () => {
    createOrder(dispatch, cart)
  };
   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   return (
      <Modal
         //title="Shopping Bag"
         visible={isModalVisible}
         onCancel={handleCancel}
         footer={null}
      >
          <div  className="order-btn">
          <div className="order-smile"><SmileOutlined style={{ color: '#FFC72D'  ,fontSize: '50px'}} /></div>
          <div >Payment Successful!</div>

            <div className="order-btn2" >
                <Button
                    className="order-modal-btn"
                    type="warning"
                    onClick={checkoutHandler}
                >
                    <span className="order-name">Continue Shopping</span>
                </Button>
                <Button
                    className="order-modal-btn2"
                    type="Default Button"
                    onClick={placeOrderHandler}
                >
                    <span className="order-name">See The Order</span>
                </Button>
            </div>
         </div>
      </Modal>
   );
}