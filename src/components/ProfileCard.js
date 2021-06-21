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
        label="Name: "
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
        label="E-mail: "
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
        label="Re Enter Password"
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
      <Form.Item  
       name="Check Your Order"
       label="Check Your Order"
       >
      <Select style={{width:"100%"}} defaultValue={" "}>
        {userOrders.orders.map(order => (
          <Option>
            <Link to={`/order/${order.id}`}>
            <p className="order-id">Order ID: {order.id}</p>
            </Link>
          </Option>
          ))}
      </Select> 
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form__button"
          size="large"
        >
          Submit
        </Button>

        <Button
          type="warning"
          style={{ marginTop: "0.8rem" }}
          className="logout-form__button"
          size="large"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Form.Item>
     
    </Form>
  );
};
export default ProfileCard;