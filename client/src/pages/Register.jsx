import { Button, Form, Input } from 'antd'
import {Link} from 'react-router-dom'
import React from 'react'

const Register = () => {
    const handleSubmit=(value)=>{
        console.log(value);
    }
  return (
    <>
        <div className="register">
            <div className="register-form">
            <h1>Billing App</h1>
            <h3>Register page</h3>
            <Form
              layout="vertical"
           
              onFinish={handleSubmit}
            >
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>
              <Form.Item name="User ID" label="UserID">
                <Input />
              </Form.Item>
              <Form.Item name="Password" label="Password">
                <Input type='password'/>
              </Form.Item>
             
              <div className="d-flex justify-content-between">
                <p>
                    Already Register Please 
                    <Link to="/login">Login Here !</Link>
                </p>
                <Button type="primary" htmlType='submit'>Register</Button>
  
              </div>
              </Form>
              </div>
        </div>
    </>
  )
}

export default Register
