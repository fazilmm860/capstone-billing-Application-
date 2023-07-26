// import React, { useEffect } from "react";
// import { Form, Input, Button } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import { message } from "antd";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleSubmit = async (value) => {
//     try {
//       dispatch({
//         type: "SHOW_LOADING",
//       });
//       const url=`http://localhost:3001`
//       const res = await axios.post(`${url}/api/users/login`, value);
//       dispatch({ type: "HIDE_LOADING" });
//       message.success("user login Succesfully");
//       localStorage.setItem("auth", JSON.stringify(res.data));
//       navigate("/");
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
//           <h3>Login Page</h3>
//           <Form layout="vertical" onFinish={handleSubmit}>
//             <Form.Item name="userId" label="User ID">
//               <Input />
//             </Form.Item>
//             <Form.Item name="password" label="Password">
//               <Input type="password" />
//             </Form.Item>

//             <div className="d-flex justify-content-between">
//               <p>
//                 not a user Please
//                 <Link to="/register"> Register Here !</Link>
//               </p>
//               <Button type="primary" htmlType="submit">
//                 Login
//               </Button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;


import{Link} from 'react-router-dom'
import styles from '../styles/loginstyles.module.css'
import axios from 'axios'
import React, { useState } from 'react'



const Signin = () => {
  const [data,setData]=useState({

    userId:'',
    password:''

  })
const [error,setError]=useState("")

const handleChange=({currentTarget:input})=>{
  setData({...data,[input.name]:input.value})
}
  const handleSubmit=async(e)=>{
      e.preventDefault()
      try {
        const url="https://hotel-billing-6sgh.onrender.com/api/users/signIn";
        const {data:res}=await axios.post(url,data)
        localStorage.setItem("token",res.data)
        window.location="/"
        
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
      <div className={styles.login_container}> 
      <div className={styles.login_form_container}>
        <div className={styles.left}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to your Account</h1>
           
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
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
        
          <h1>Welcome Back</h1>
          <Link to="/signup">
            <button type='button' className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Signin
