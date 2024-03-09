import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";
import {useFormik} from 'formik'
import { signInSchema } from '../schemas';
const initialValues={
  email: "",
  password: "",
};

const Login = () => {   
const {values,touched, errors,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema: signInSchema,
    onSubmit:(values)=>{
console.log(values);
    },
  });
  console.log(errors);
 
  return (

    
    <div className=' flex flex-col gap-2 md:justify-center md:items-center mt-16 w-[280px] md:w-[450px] ml-28 md:ml-44 sm:ml-60 lg:ml-[390px]'>
        <div className='flex flex-col md:justify-center md:items-center shadow-md bg-slate-100 z-10 rounded-lg'>
            <div className='ml-24 md:ml-6 '>
            <img className='w-28' src={logo} alt="" />
            </div>
            {/* <div >
                <h1 className='text-3xl font-medium ml-20 md:ml-8'>SIGN IN</h1>
            </div> */}
            <div>
                <form className="flex flex-col gap-3 p-2 ml-2" onSubmit={handleSubmit}>
                    <div className=' flex flex-col gap-3 '>
                        <label htmlFor="email" className='text-2xl font-semibold'> 
                          Email
                        </label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md  w-[250px] md:w-[400px] h-10 ' type="email"  name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your Email'/>
                        {errors.email && touched.email ? (
                <p className=" text-red-700 font-semibold">{errors.email}</p>
              ) : null}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="password" className=' text-2xl font-semibold'>
                            Password
                        </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md  w-[250px] md:w-[400px] h-10 " type="password"  name="password" id="password" placeholder='Enter your Password'  value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.password && touched.password ? (
                <p className=" text-red-700 font-semibold">{errors.password}</p>
              ) : null}
                
               </div>
               <div className=' flex justify-between'>
                <div className='flex justify-center items-center gap-2'>
                    <input  type="checkbox" name="right" id="right"/>
                    <p className="text-md font-bold">Remember Me</p>

                </div>
                

               </div>
               <div className="flex justify-center bg-red-600 text-white rounded-md h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
              <button className="">Login</button>
            </div>
            <div>
                <a to="" className="text-md text-blue-800 font-semibold mb-2 cursor-pointer">
                  Forgot password?
                </a>
              </div>

                </form>
            </div>
            



        </div>

    </div>
  )
}

export default Login