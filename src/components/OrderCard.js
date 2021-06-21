import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Spin,Button } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
// import GooglePayButton from '@google-pay/button-react';
import { requestOrderDetail } from "../action"
import { StoreContext } from "../store";

export default function OrderCard({ orderId }) {
   const { state: { orderDetail: { loading, order } }, dispatch } = useContext(StoreContext);
   const { orderItems } = order;
   const history = useHistory()
   const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#FFC72D" }} spin />;
   
   // const placeOrderHandler = () => {
   //    createOrder(dispatch, cart)
   //  };
    const placeOrderPay = () => {
      history.push('/');
    };
   // const paymentRequest = {
   //    apiVersion: 2,
   //    apiVersionMinor: 0,
   //    allowedPaymentMethods: [
   //      {
   //        type: "CARD",
   //        parameters: {
   //          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
   //          allowedCardNetworks: ["MASTERCARD", "VISA"]
   //        },
   //        tokenizationSpecification: {
   //          type: "PAYMENT_GATEWAY",
   //          parameters: {
   //            gateway: "example"
   //          }
   //        }
   //      }
   //    ],
   //    merchantInfo: {
   //      merchantId: "12345678901234567890",
   //      merchantName: "Demo Merchant"
   //    },
   //    transactionInfo: {
   //      totalPriceStatus: "FINAL",
   //      totalPriceLabel: "Total",
   //      totalPrice: String(order.totalPrice),
   //      currencyCode: "USD",
   //      countryCode: "US"
   //    }
   //  };

   useEffect(() => {
      requestOrderDetail(dispatch, orderId)
   }, [orderId])

   return (
      <>
         {loading
            ? (
               <div className="spinner-wrap">
                  <Spin indicator={antIcon} className="spinner" />
               </div>
            ) : (
               <Row gutter={[24, 24]} className="order-row">
                  <Col
                     xs={{ span: 20, offset: 0 }}
                     lg={{ span: 9, offset: 0 }}
                  >
                     <h5 style={{ color: 'black', marginBottom:"2rem",paddingTop:"2rem" }}>Order Items</h5>
                     <div className="card card-body">
                        {orderItems.length === 0 ? (
                           <div>Cart is empty</div>
                        ) : (
                           orderItems.map(item => (
                              <li key={item.id} className="order-cart-item">
                                 <div className="order-cart-image">
                                    <img src={item.image} alt={item.name} />
                                 </div>
                                 <div className="order-cart-item-content">
                                    <div className="order-cart-name">{item.name}</div>
                                    <div className="order-item">
                                       <div className="cart-author-name">{item.author}</div>
                                       <div className="cart-color">{item.col}</div>
                                       <div className="qtyPrice">
                                          <div className="product-qty">
                                             Qty:{item.qty}
                                          </div>
                                          <div className="order-cart-price">
                                             ${item.price * item.qty}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="order-card-bottom"></div>
                              </li>
                           ))
                        )}
                     </div>

                  </Col>
                  <Col
                     xs={{ span: 20, offset: 0 }}
                     lg={{ span: 8, offset: 0 }}
                  >
                     <div className="bg-grey">
                        <h5 style={{ color: 'black', marginBottom:"2rem" }}>Check out</h5>
                        <div className="card card-body">
                        <h6 style={{ color: '#426393' }}>Shipping</h6>
                           <div className="checkout-content">
                              <div>Name：</div> 
                              <div>{order.shippingAddress.fullName} </div>
                           </div>
                           <div className="checkout-content"> 
                              <div>Address： </div>  
                              <div>{order.shippingAddress.address},{order.shippingAddress.city}, 
                              {order.shippingAddress.postalCode},{order.shippingAddress.country}</div>
                           </div>
                        </div>
                        <div className="card card-body">
                           <h6 style={{ color: '#426393' }}>Payment</h6>
                           <p className="checkout-content">
                              <div>Method：</div> {order.paymentMethod}
                           </p>
                        </div>
                        <div className="card card-body card-bottom3">
                           <h6 style={{ color: '#426393' }}>Order Summary</h6>
                           <div className="checkout-content">
                              <div>Items</div>
                              <div>${order.itemsPrice}</div>
                           </div>
                           <div className="checkout-content">
                              <div>Shipping</div>
                              <div>${order.shippingPrice}</div>
                           </div>
                           <div className="checkout-content">
                              <div>Tax</div>
                              <div>${order.taxPrice}</div>
                           </div>
                        </div>

                        <div className="row checkout-Totalcontent">
                              <div>
                                 <strong>Total：</strong>
                              </div>
                              <div>
                                 <strong>${order.totalPrice}</strong>
                              </div>
                           </div>
                           <Button
                              className="OrderPay__button"
                              block
                              type="primary"
                              onClick={placeOrderPay}
                           >
                              Continue Shopping
                        </Button>
                     </div>
                     
                        {/* <GooglePayButton
                           className="googlepay__button"
                           environment="TEST"
                           buttonColor="black"
                           paymentRequest={paymentRequest}
                           onLoadPaymentData={paymentRequest => {
                              console.log('load payment data', paymentRequest);
                              history.push('/');
                           }}
                        /> */}

                  </Col>
               </Row>

            )

         }
      </>


   );
}