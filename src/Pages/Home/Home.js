import React from 'react';
import './Home.css'
import bg from '../Assets/Images/bg.jpg'
import bg3 from '../Assets/Images/bg3.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div style={{backgroundImage:`url(${bg})`, backgroundSize:'cover'  }} className="min-h-screen p-6 ">
       <div className='flex flex-row align-middle justify-center '>
          <div className='flex-none '>
            <img className='fluid' src={bg3}/>
          </div>
          <div className='flex-1 '>
            <h1 className='text-8xl text-[#F0EEED]'>DaKpion</h1>
            <p className='text-4xl mt-4'>Connnet Your Friends Or Team By Our New App</p>
            <button className="btn bg-gradient-to-r from-indigo-500 mr-4 mt-8 "> <Link to='/login'>Join </Link> </button>
            <button className="btn bg-gradient-to-r from-indigo-500 mt-8 "> <Link to='/register'>Register</Link> </button>
        

          </div>
          <div className='flex-1 '>
        
          </div>
         
       </div>
    </div>
    );
};

export default Home;