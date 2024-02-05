import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { Link } from "react-router-dom";
const Register = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
    <div>
      <form class="form">
        <p class="title">Register </p>
        <p class="message">Register and Unleash Productivity. Your journey to effortless Task Management Begins here </p>
        <div class="flex">
          <label for="firstname">First Name
            <input class="input" type="text" placeholder="" required="" />
          </label>
          <label for="lastname">Last Name
            <input class="input" type="text" placeholder="" required="" />
          </label>
        </div>  
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
        <p class="signin">Already have an acount ? <Link to="/Login"> Signin</Link> </p>
        </form>
    </div>
    );
}
export default Register