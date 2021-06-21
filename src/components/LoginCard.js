import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import {loginToFirebase, rememberLoginUser } from '../action'
import { StoreContext } from "../store"


const LoginCard = ({ redirect }) => {
  const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();
 
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await loginToFirebase(dispatch, values);
  };

  const onChange = e => {
    rememberLoginUser(dispatch, e.target.checked);
  }

  useEffect(() => {    
    if( userInfo  ) history.push(redirect);
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
   
    <Form
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        className="login-form-content"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="E-Mail"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          size="large"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <div className="login-remember">
        <Form.Item
          name="remember"
          noStyle
        >
          <Checkbox onChange={onChange} checked={remember}>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form__forgot" style={{ color:'#FFC72D' }} to={"/"}>
          Forgot password
        </Link>
        </div>
      </Form.Item>

      <Form.Item>
        {loading ? (
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
            loading
          >
            Log in
          </Button>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
          >
            Log in
          </Button>
        )}
        <div className="login-or">
        Or <Link to={"/register?redirect=shipping" }className="login-register" style={{ color:'#FFC72D' }}>register now!</Link></div>
        {error === "" ? (
          <></>
        ) : (
          <div className="login-form__error-wrap">
            <h3 className="login-form__error-title">
              <WarningOutlined className="site-form-item-icon" />
              {"  "}There was a problem
            </h3>
            <p className="login-form__error-message">{error}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};
export default LoginCard;