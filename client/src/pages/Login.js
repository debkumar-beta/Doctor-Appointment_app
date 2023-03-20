import React from "react";
import "../styles/RegisterStyle.css";
import { Form, Input,message } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const onfinishHandler = async(value) => {
    try {
      const res = await axios.post('/api/v1/user/login',value)
      if(res.data.success){
        localStorage.setItem("token",res.data.token);
        message.success('RLogin successfully!')
        navigate("/");
      }else{
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error("something went wrong")
    }
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
