import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Input, Button, Select} from "antd";
import { logoutFromFirebase, updateUserInfo, getUserOrders } from "../action";
import { StoreContext } from "../store";
import { Option } from "antd/lib/mentions";

const ProfileCard = () => {
  const {
    state: {
      userSignin: { userInfo },
      userOrders, 
    },
    dispatch,
  } = useContext(StoreContext);
  const { displayName, email } = userInfo;
  const history = useHistory();
  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    console.log(values)
    updateUserInfo(dispatch, values);
  };

  const handleLogout = () => {
    logoutFromFirebase(dispatch);
    history.push("/");
  };
  useEffect(()=>{
    getUserOrders(dispatch);
  }, [userInfo])
  return (
    <Form
      onFinish={handleUpdate}
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={userInfo}
    >
      <Form.Item
        label="name: "
        name="name"
        rules={[
          {
            type: "string",
            message: "The input is not valid name!",
          },
          {
            message: "Please input your name!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={displayName} />
      </Form.Item>
      <Form.Item
        label="email: "
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            message: "Please input your E-mail!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={email} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="Re-enter Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            message: "Please re-enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form__button"
        >
          Submit
        </Button>

        <Button
          type="danger"
          style={{ marginTop: "0.8rem" }}
          className="login-form__button"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Form.Item>
      <p style={{textAlign:"center",fontSize:"20px"}}>訂單列表</p>
      <Select style={{width:"100%"}} defaultValue={"選擇你要查詢的訂單"}>
        {userOrders.orders.map(order => (
          <Option>
            <Link to={`/order/${order.id}`}>
              <div  style={{width:"100%",marginBottom:"10px",borderWidth:"0",display:"flex",paddingTop:"10px"}}>
                <div className="order-block" style={{color:"#46A3FF"}}>
                  <p className="order-id">Order ID: {order.id}</p>
                  <p >Order Items: {order.orderItems.map(x => (x.name))}</p>
                  <p className="order-tex">Tex Price: {order.taxPrice}</p>
                  <p className="order-shipping">Shipping Price: {order.shippingPrice}</p>
                  <p className="order-total">Total Price: {order.totalPrice}</p>
                </div>
              </div>
            </Link>
          </Option>
          ))}
      </Select>
    </Form>
  );
};
export default ProfileCard;
