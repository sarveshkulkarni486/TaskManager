import React, { useState } from "react";
import './login.css';
import {Button, Card} from 'react-bootstrap';
import useLocalStorage from 'use-local-storage';
import { Link } from "react-router-dom";

const Login = ({handleLoginClick}) => {
   const[theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
   const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' :'light';
      setTheme(newTheme)
   }
   const [email, setEmail] = useState();
   const [password, setPassword] = useState('');
   return(
      <div>
      <form class="form">
         <p class="title">Login </p>
         <p class="message">Login and Unleash Productivity. Your journey to effortless Task Management Begins here </p>
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