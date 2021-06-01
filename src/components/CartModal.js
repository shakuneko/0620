import { Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store"
import Cookie from "js-cookie"
import { addCartItem, removeCartItem, setProductDetail } from "../action";
import { FrownOutlined } from '@ant-design/icons';
const { Option } = Select;

export default function CartModal() {
   const { state: {cart:{ cartItems }}, dispatch } = useContext(StoreContext);
   // const handleCancel = () => toggleModal(!isModalVisible);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   useEffect(()=>{
      Cookie.set("cartItems", JSON.stringify(cartItems));
     }, [cartItems])

   return (
      <div className=" shopcart-container " >
            <div className="shopping-container">
               <h4 className="shopcart">Shop Cart</h4>
               <h4 className="shopping-title-product">Product</h4>
               <div className="cart-item-title">
                  <div className="cart-item-title2">
                     <p className="shopping-item-content">Color</p>
                     <p className="shopping-item-content">Quantity</p>
                     <p className="shopping-item-content">Price</p>
                  </div>
               </div>

            </div>
            {cartItems.length === 0 ? (
               <div className="noproduct" >
                  <div className="noproduct2">
                     <div className="noproduct-icon"><FrownOutlined  style={{ fontSize: '72px', color: '#426393' }} /></div>
                     <div className="noproduct-word">You Have 0 Items In Your Cart</div>
                  </div>
               </div>               
            ) : (
            cartItems.map(item => (
               <div className="shopping-container1">
                  <li key={item.id} className="cart-item">
                     <Link to={`/products/${item.category}/${item.id}`} className="cart-image">
                        <div  onClick={()=>{
                           setProductDetail(dispatch, item.id, item.qty);
                           // handleCancel();
                        }}>
                           <img src={item.image} alt={item.name} />
                        </div>
                     </Link>
                     
                     <div className="cart-item-content">
                        <div className="shopping-name">
                           <h5 className="cart-name">{item.name}</h5>
                           <div className="cart-author-name">{item.author}</div>
                        </div>

                        <div className="option-container">
                           <div className="shopping-content">
                              <div className="shopping-content-color">
                              <div className="cart-color">{item.col}</div>
                                 {/* <Select 
                                    defaultValue={"None"} 
                                    value={item.col}
                                    className="select-style cart-top-right-container"
                                    onChange={(col) => addCartItem(dispatch, item, col,item.qty)}
                                    // onChange={val=>setColor(val)}
                                    
                                 >
                                 {[...Array(item.colorNum).keys()].map((x) => (
                                    <Option key={x} value={x}>
                                    {item.col} 
                                    </Option>
                                 ))}
                              </Select>  */}
                              </div>

                              <div  className="shopping-qty">
                                 <div className="product-qty ">
                                 &nbsp;
                                       <Select
                                          defaultValue={item.qty}
                                          value={item.qty}
                                          className="select-style cart-top-center-container"
                                          onChange={(qty) => addCartItem(dispatch, item, qty,item.col)}
                                          size="large"
                                       >
                                          {[...Array(item.countInStock).keys()].map((x) => (
                                             <Option key={x + 1} value={x + 1}>
                                                {x + 1}
                                             </Option>
                                          ))}
                                       </Select>
                                 </div>
                              </div>
                           </div>
                           <div className="shopping-content2">
                              <div className="shopping-content-price">

                                 <div className="cart-price">
                                    ${item.price * item.qty}
                                 </div>
                              </div>
                           
                              <div className="cart-item-end">
                                 <div className="cart-item-delete" onClick={() => removeCartItem(dispatch, item.id)}>
                                    x
                                 </div>
                              </div>
                           </div>
                        </div>


                     </div>
                  </li>
               </div>
             ))
            )}
            <div className="shopping-container2">
               <div className="cart-total">
                  <div className="cart-total-price-wrap">
                     <div className="cart-total-price-wrap2">
                        <p className="total">TOTAL :</p>
                        <div className="cart-total-price">${getTotalPrice()}</div>
                     </div>
                  </div>
                  <div className="cart-btn">
                     <Link to={"/"} className="cart-btn1" >
                        <Button 
                           className="cart-modal-btn-left" type="primary" > 
                           <span>Continue Shopping</span>
                        </Button>
                     </Link>
                     <Link className="cart-btn2">
                        <Button
                           className="cart-modal-btn-right  " type="warning" danger>
                           <span>Checkout</span>
                        </Button>
                     </Link>

                  </div>
               </div>
            </div>
            
       </div>
            
   );
}  