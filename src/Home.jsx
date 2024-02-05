import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    return(
        <div className='container'>
            <h1>Manage Your Task</h1>
            <br />
            <p>Encan boards, lists, and cards enable you to organize and prioritize your projects in fun,</p>
            <p>flexible, and rewarding way, Let's get started &#128522;</p>
            <button className='btn btn1' style={{marginLeft: '29rem', gap:'2px'}}>Get Started</button>
            <button className='btn btn2'>Discover In Video</button>
        </div>
    );
}
export default Home;