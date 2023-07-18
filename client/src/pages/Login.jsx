import React from 'react'
import { Button, Form, Input } from 'antd'
import {Link} from 'react-router-dom'

const Login = () => {
    const handleSubmit=(value)=>{
        console.log(value);
    }
  return (
    <>
     <div className="register">
            <div className="register-form">
            <h1>Billing App</h1>
            <h3>Login page</h3>
            <Form
              layout="vertical"
           
              onFinish={handleSubmit}
            >
              <Form.Item name="User ID" label="UserID">
                <Input />
              </Form.Item>
              <Form.Item name="Password" label="Password">
                <Input type='password'/>
              </Form.Item>
             
              <div className="d-flex justify-content-between">
                <p>
                    not a user  Please 
                    <Link to="/register">Register Here !</Link>
                </p>
                <Button type="primary" htmlType='submit'>Login</Button>
  
              </div>
              </Form>
              </div>
        </div>
    </>
  )
}

export default Login
