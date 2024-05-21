import React from "react";
import axios from 'axios';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[cnfpassword, setcnfPassword] = useState('');
    const[message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
      e.preventDefault();
      const user = {firstname, lastname, email, password};
      if (password !== cnfpassword) {
        setMessage('Passwords do not match');
        return;
      }

      try {
        const res = await axios.post('http://localhost:5000/register/', user);
        setMessage('User registered succesfull.');
        localStorage.setItem('token', res.data.token);
        navigate('/Login');
      } catch(err) {
        if(err.response && err.response.status === 400){
          setMessage('User already exists');
        } else {
          setMessage('Error registering users');
        }
        console.error(err);
      }
    };

    return (
    <div>
      <form class="form" onSubmit={handleSubmit}>
        <p class="title">Register </p>
        <p class="message">Register and Unleash Productivity. Your journey to effortless Task Management Begins here </p>
        {message && <p className="message">{message}</p>}
        <div class="flex">
          <label for="firstname">First Name
            <input class="input" type="text" placeholder="" required="" value={firstname} onChange={(e)=> setFirstName(e.target.value)} />
          </label>
          <label for="lastname">Last Name
            <input class="input" type="text" placeholder="" required="" value={lastname} onChange={(e)=> setLastName(e.target.value)} />
          </label>
        </div>  
        <label for="email">Email
          <input class="input" id="email" type="email" placeholder="" required="" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </label> 
        <label for="name">Password
          <input class="input" id="password" type="password" placeholder="" required="" value={password} onChange={(e)=> setPassword(e.target.value)} /> 
        </label>
        <label for="cnfpassword">Confirm Password
          <input class="input" id="cnfpassword" type="password" placeholder="" required="" value={cnfpassword} onChange={(e)=> setcnfPassword(e.target.value)} />     
        </label>
        <button class="submit">Submit</button>
        <p class="signin">Already have an acount ? <Link to="/Login"> Signin</Link> </p>
        </form>
    </div>
    );
}
export default Register