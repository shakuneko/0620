import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { createOrder, resetOrder, requestOrderDetail } from "../action"
import { StoreContext } from "../store";

export default function PlaceOrderCard() {
  const { state: { cart, orderInfo: { loading, success, order } }, dispatch } = useContext(StoreContext);
  const { cartItems } = cart;
  const history = useHistory()
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

  const placeOrderHandler = () => {
    createOrder(dispatch, cart)
  };

  const getTotalPrice = () => {
    return (cartItems.length > 0) ?
      cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : 0;
  }

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  useEffect(() => {
    if (success) {
      resetOrder(dispatch);
      requestOrderDetail(dispatch, order.id)
      history.push(`/order/${order.id}`);
    }
  }, [success]);

  return (
    <>
      {loading
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <Row gutter={[24, 24]}>
            <Col
              xs={{ span: 20, offset: 2 }}
              lg={{ span: 11, offset: 2 }}
            >
              <h5 style={{ color: 'black' }}>Order Items</h5>
              <div className="card card-body">
               
                {cartItems.length === 0 ? (
                  <div>Cart is empty</div>
                ) : (
                  cartItems.map(item => (
                    <li key={item.id} className="order-cart-item">
                      <div className="order-cart-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="order-cart-item-content">
                        <div className="order-cart-name">{item.name}</div>
                        <div className="order-item">
                          <div className="cart-author-name">{item.author}</div>
                          <div className="cart-color">{item.col}</div>
                          <div className="product-qty">
                          Qty:{item.qty}
                          </div>
                        </div>
                      </div>
                      <div className="card-bottom">
                      <div className="order-cart-item-end">
                        <div className="cart-price">
                          ${item.price * item.qty}
                        </div>
                      </div>
                      </div>

                    </li>
                  ))
                )}
                <div className="cart-total-price-wrap-order">
            {/* <div className="cart-total-price">${getTotalPrice()}</div> */}
                </div>
              </div>

            </Col>
            <Col
              xs={{ span: 20, offset: 2 }}
              lg={{ span: 9, offset: 0 }}
            >
               <h5 style={{ color: 'black' }}>Check out</h5>
              <div className="card card-body">
                <h6 style={{ color: '#FFC72D' }}>Shipping</h6>
                <div className="checkout-content">
                  <div>Name：</div> 
                  <div>{cart.shippingAddress.fullName}</div>
                </div>
                <div className="checkout-content"> 
                  <div>Address： </div> 
                  <div>{cart.shippingAddress.address},{cart.shippingAddress.city}, 
                  {cart.shippingAddress.postalCode},{cart.shippingAddress.country}</div>
                </div> 
              </div>
              <div className="card card-body">
                <h6 style={{ color: '#FFC72D' }}>Payment</h6>
                <p className="checkout-content">
                  <div>Method：</div> {cart.paymentMethod}
                </p>
              </div>
              <div className="card card-body card-bottom3">
                <h6 style={{ color: '#FFC72D' }}>Order Summary</h6>
                <div className="row checkout-content">
                  <div>Items：</div>
                  <div>${cart.itemsPrice}</div>
                </div>
                <div className="row checkout-content">
                  <div>Shipping：</div>
                  <div>${cart.shippingPrice}</div>
                </div>
                <div className="row checkout-content">
                  <div>Tax：</div>
                  <div>${cart.taxPrice}</div>
                </div>
              </div>
              <div className="row checkout-Totalcontent">
                  <div>
                    <strong> Total：</strong>
                  </div>
                  <div>
                    <strong>${cart.totalPrice}</strong>
                  </div>
                </div>
              <Button
                  className="placeOrder__button"
                  block
                  type="primary"
                  onClick={placeOrderHandler}
                >
                  Check 
                </Button>

            </Col>
          </Row>
        )
      }
    </>

  );
}

