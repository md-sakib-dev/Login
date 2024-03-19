import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash ,FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useFormik } from 'formik';
import { createUserSchema } from '../../schemas';

const NewUser = () => {
  const [visible,setVisible]=useState(false)

  const initialValues= {
    name:"",
    email: "",
    password:"",
    confirm_password:"",
  }
  const {values, errors,touched, handleBlur,handleChange,handleSubmit} =useFormik({

    initialValues: initialValues,
    validationSchema:  createUserSchema,
    onSubmit: (values,action)=>{
      console.log(values)
action.resetForm();
    }
  })
  return (
    <div className=' w-96 mx-auto border-2  rounded-2xl mt-20 flex flex-col justify-center items-center'>
        <h1 className='font-signature font-bold text-2xl text-center border-b border-slate-200 py-3'>Add New User</h1>
       
      <div className='flex flex-col  justify-between items-center'>
        <div className='mt-5'>
        <form className="flex flex-col  gap-5 p-2 ml-2" onSubmit={handleSubmit}>
          <div className=' flex flex-col gap-2'>
          <div className='flex flex-col gap-2  relative'>
        <input className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-[250px] md:w-[300px] h-10" type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder=''  />
        <label htmlFor="username" className='absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'>
            Username
        </label>
        <div>
           <FaUser size={20} className='absolute top-4 right-4'/>
        </div>
        {errors.name && touched.name ? (<p className="text-red-700 font-semibold">{errors.name}</p>):null}
    </div>
          <div className=' flex flex-col  gap-2 relative'>
                        <input className=' bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[300px] h-10 ' type="email"  name='email' id='email'  value={values.email} onChange={handleChange} onBlur={handleBlur}   placeholder="" />
                        <label htmlFor="email" className='absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'> 
                          Email
                        </label>
                        <div>

                        <MdEmail size={20} className='absolute top-4 right-4'/>
                        </div>
                        
                {errors.email && touched.email ?(<p className=" text-red-700 font-semibold">{errors.email}</p>): null}
            
                    </div>
                    {/* <div>
               <select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-[250px] md:w-[300px] h-10 font-semibold">
            <option value="" disabled selected>Select an Role</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
               </div>
               <div>
               <select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-[250px] md:w-[300px] h-10 font-semibold">
            <option value="" disabled selected>Select an Branch</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
               </div> */}
          </div>
                    
                   


                  <div>

                    <div className='flex flex-col gap-3 relative'>
                        <input className=" bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[300px] h-10  " type={visible? "text" :"password"} name="password" id="password"  value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder=''  />
                        <label htmlFor="password" className='absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'>
                            Password
                        </label>
                        <div onClick={()=>setVisible(!visible)}>

                        { visible ? <FaRegEye size={20} className='absolute top-4 right-4'/>:  <FaRegEyeSlash size={20} className='absolute top-4 right-4'/> }
 </div>
                  </div>        
                {errors.password && touched.password ?(<p className=" text-red-700 font-semibold">{errors.password}</p>): null}
                   

                <div className='flex flex-col gap-3 relative'>
                        <input className=" bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[300px] h-10  " type={visible? "text" :"password"} name="confirm_password" id="confirm_password"  value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} placeholder='' />
                        <label htmlFor="password" className='absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'>
                         Confirm  Password
                        </label>
                        <div onClick={()=>setVisible(!visible)}>

                       { visible ? <FaRegEye size={20} className='absolute top-4 right-4'/>:  <FaRegEyeSlash size={20} className='absolute top-4 right-4'/> }
                        </div>
                  </div>        
                  {errors.confirm_password && touched.confirm_password ?(<p className=" text-red-700 font-semibold">{errors.confirm_password}</p>): null}
              
               </div>
               
              
            
               <div className="flex justify-center py-2 mb-5 bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
              <button className="">Create</button>

              </div>
            

                </form>

        </div>

      </div>


    </div>
  )
}

export default NewUser