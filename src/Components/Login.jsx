import React, { useState } from "react";
import './login.css';
import {Button, Card} from 'react-bootstrap';
import useLocalStorage from 'use-local-storage';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({handleLoginClick}) => {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState('');
   const[cnfpassword, setCnfPassword] = useState('');
   const [message, setMessage] = useState('');
   const navigate = useNavigate();

   const handleLogin = async(e)=> {
      e.preventDefault();
      const candidate = {email, password};
      if(password !== cnfpassword) {
         setMessage('Passwords does not match');
         return;
      }
      try {
         const res = await axios.post('http://localhost:5000/login', candidate);
         setMessage('Login successfully');
         localStorage.setItem('token', res.data.token);
         navigate('/HomePage');
      } catch(err) {
         setMessage('Invalid credentials');
         console.error(err);
      }
   };

   return(
      <div>
      <form className="form" onSubmit={handleLogin}>
         <p className="title">Login </p>
         <p className="message">Login and Unleash Productivity. Your journey to effortless Task Management Begins here </p>
         {message && <p className="message">{message}</p>}
            <label for="email">Email
               <input className="input" id="email" type="email" placeholder="" required="" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </label> 
            <label for="name">Password
               <input className="input" id="password" type="password" placeholder="" required="" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </label>
            <label for="cnfpassword">Confirm Password
               <input className="input" id="cnfpassword" type="password" placeholder="" required="" name="cnfPassword" value={cnfpassword} onChange={(e)=> setCnfPassword(e.target.value)} />      
            </label>
            <button className="submit" type="Submit">Submit</button>
            <p className="signin">Don't have an account ? <Link to="/Register"> Signin</Link> </p>
         </form>
      </div>
   );
}
export default Login;