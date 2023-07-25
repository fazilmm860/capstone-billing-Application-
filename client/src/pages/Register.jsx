// import React, { useEffect } from "react";
// import { Form, Input, Button } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import { message } from "antd";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (value) => {
//     try {
//       dispatch({
//         type: "SHOW_LOADING",
//       });
//       const url=`http://localhost:3001`
//       await axios.post(`${url}/api/users/register`, value);
//       message.success("Register Succesfully");
//       navigate("/login");
//       dispatch({ type: "HIDE_LOADING" });
//     } catch (error) {
//       dispatch({ type: "HIDE_LOADING" });
//       message.error("Something Went Wrong");
//       console.log(error);
//     }
//   };

//   //currently login  user
//   useEffect(() => {
//     if (localStorage.getItem("auth")) {
//       localStorage.getItem("auth");
//       navigate("/");
//     }
//   }, [navigate]);
//   return (
//     <>
//       <div className="register">
//         <div className="regsiter-form">
//           <h1>Billing APP</h1>
//           <h3>Register Page</h3>
//           <Form layout="vertical" onFinish={handleSubmit}>
//             <Form.Item name="name" label="Name">
//               <Input />
//             </Form.Item>
//             <Form.Item name="userId" label="User ID">
//               <Input />
//             </Form.Item>
//             <Form.Item name="password" label="Password">
//               <Input type="password" />
//             </Form.Item>

//             <div className="d-flex justify-content-between">
//               <p>
//                 ALready Register Please
//                 <Link to="/login"> Login Here !</Link>
//               </p>
//               <Button type="primary" htmlType="submit">
//                 Register
//               </Button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

import{Link, useNavigate} from 'react-router-dom'
import styles from '../styles/styles.module.css'
import axios from 'axios'
import React, { useState } from 'react'



const Signup = () => {
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    userId:"",
    password:""

  })
const [error,setError]=useState("")
const navigate=useNavigate()

const handleChange=({currentTarget:input})=>{
  setData({...data,[input.name]:input.value})
}

  const handleSubmit=async(e)=>{
      e.preventDefault()
      try {
        const url="http://localhost:3001/api/users/signUp";
        const {data:res}=await axios.post(url,data)
        navigate("/login")
        console.log(res.message);
      } catch (error) {
        if(error.response &&
          error.response.status >=400 &&
          error.response.status <=500 
          ){
            setError(error.response.data.message)
          }
      }
  }
  
  return (
    <div>
      <div className={styles.signup_container}> 
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type='button' className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input 
            type="text"
            placeholder='First Name'
            name='firstName'
            onChange={handleChange}
            value={data.firstName}
            required
            className={styles.input}
            />

            <input 
            type="text"
            placeholder='Last Name'
            name='lastName'
            onChange={handleChange}
            value={data.lastName}
            required
            className={styles.input}
            />

            <input 
            type="text"
            placeholder='User ID'
            name='userId'
            onChange={handleChange}
            value={data.userId}
            required
            className={styles.input}
            />

            <input 
            type="password"
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={data.password}
            required
            className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type='submit' className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Signup
