import React from "react";
import "../styles/RegisterStyle.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const onfinishHandler = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          className="register-form"
          onFinish={onfinishHandler}
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="text" required />
          </Form.Item>
          <Link className="m-2" to="/login">
            already user login here
          </Link>
          <button className="btn btn-primary">Register</button>
        </Form>
      </div>
    </>
  );
};
 
export default Register;
