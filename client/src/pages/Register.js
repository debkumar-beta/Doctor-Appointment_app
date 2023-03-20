import React from "react";
import "../styles/RegisterStyle.css";
import { Form, Input,message } from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate()

  const onfinishHandler = async (value) => {
    try {
      const res = await axios.post('/api/v1/user/register',value)
      if(res.data.success){
        message.success('Register successfully!')
        navigate("/login");
      }else{
        message.error("Something went wrong")
      }
    } catch (error) {
      console.log(error)
      message.error("something went wrong")
    }
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
