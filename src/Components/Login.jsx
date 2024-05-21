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
         const res = await axios.post('http://localhost:5000/login/', candidate);
         setMessage('Login successfully');
         localStorage.setItem('token', res.data.toke);
         navigate('/Register');
      } catch(err) {
         setMessage('Invalid credentials');
         console.error(err);
      }
   };

   return(
      <div>
      <form class="form">
         <p class="title">Login </p>
         <p class="message">Login and Unleash Productivity. Your journey to effortless Task Management Begins here </p>
         {message && <p className="message">{message}</p>}
            <label for="email">Email
               <input class="input" id="email" type="email" placeholder="" required="" />
            </label> 
            <label for="name">Password
               <input class="input" id="password" type="password" placeholder="" required="" />
               
            </label>
            <label for="cnfpassword">Confirm Password
               <input class="input" id="cnfpassword" type="password" placeholder="" required="" />
               
            </label>
            <button class="submit">Submit</button>
            <p class="signin">Don't have an account ? <Link to="/Register"> Signin</Link> </p>
         </form>
      </div>
   );
}
export default Login;