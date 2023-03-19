import React from "react";
import "../styles/RegisterStyle.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const onfinishHandler = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div className="form-container">
        <Form
          layout="vertical"
          className="register-form"
          onFinish={onfinishHandler}
        >
          <h3 className="text-center">Login Form</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="text" required />
          </Form.Item>
          <Link className="m-2" to="/register">
            Not a user Register here
          </Link>
          <button className="btn btn-primary">Login</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
