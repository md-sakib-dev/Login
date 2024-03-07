import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";

const Login = () => {   
  return (
    
    <div className=' flex flex-col gap-4 md:justify-center md:items-center mt-14 w-[280px] md:w-[450px] ml-16 md:ml-44 sm:ml-60 lg:ml-[390px]'>
        <div className='flex flex-col md:justify-center md:items-center shadow-md  bg-white'>
            <div className='ml-24 md:ml-10'>
            <img className='w-20' src={logo} alt="" />
            </div>
            <div >
                <h1 className='text-3xl font-medium ml-20 md:ml-8'>SIGN IN</h1>
            </div>
            <div>
                <form className="flex flex-col gap-7 p-2 ml-2">
                    <div className=' flex flex-col gap-3 '>
                        <label htmlFor="email" className='text-2xl font-semibold'> 
                          Email
                        </label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md  w-[250px] md:w-[400px] h-10 ' type="email"  name='email' id='email' placeholder='Enter your Email'/>

                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="password" className=' text-2xl font-semibold'>
                            Password
                        </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md  w-[250px] md:w-[400px] h-10 " type="password"  name="password" id="password" placeholder='Enter your Password'/>
                
               </div>
               <div className=' flex justify-between'>
                <div className='flex justify-center items-center gap-2'>
                    <input  type="checkbox" name="right" id="right"/>
                    <p className="text-md font-bold">Remember Me</p>

                </div>
                

               </div>
               <div className="flex justify-center bg-red-600 text-white rounded-md h-9 hover:opacity-90 ">
              <button className="">Login</button>
            </div>
            <div>
                <p to="" className="text-md text-blue-800 font-semibold mb-5">
                  Forgot password?
                </p>
              </div>

                </form>
            </div>
            



        </div>

    </div>
  )
}

export default Login