import { useFormik } from 'formik'
import React from 'react'
import { IoMdClose } from "react-icons/io";
import {  mergeSize } from '../../schemas';

const ShowSize = ({closeModal}) => {
    const initialValues={
        size:"",
        newsize:"",
    }
   const{values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
        validationSchema: mergeSize,
        onSubmit :(values, action)=>{
          action.resetForm();
        }

    })
  return (
    <>
  
    <div className='  bg-gray-200 backdrop-filter backdrop-blur-sm bg-opacity-10   fixed  left-0 right-0 bottom-0 top-0'>
    </div>
      <div className='fixed top-[50%] left-[50%] max-w-40rem transform -translate-x-1/2 -translate-y-1/2 bg-green-200  py-8 px-12 border rounded-lg'>

    <div className='flex justify-around items-center gap-2  border-y border-slate-500 py-3 w-full'>
        
     <h1 className='font-signature text-black font-bold text-2xl text-center '>Merge Group</h1>
     <div onClick={closeModal}>
     <IoMdClose color='black'  size={20}/>
    
     </div>
    </div>
     <form className='flex flex-col justify-center md:justify-around items-center text-black mt-5 gap-8'onSubmit={handleSubmit}>
     <div className='flex flex-col md:flex-row md:justify-around gap-8'>
     <div className='flex flex-col gap-5'>
      <p className='text-sm'>Orginal Size Name</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='size' as='select'  value={values.size} onChange={handleChange} >
            <option value="" >Select a Size</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.size ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.size}</p>): null}
    </div>
    <div className='flex flex-col gap-5'>
      <p className='text-sm'>Size Name To Be Changed</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"   name='newsize' as='select'  value={values.newsize} onChange={handleChange} >
            <option value="" >Select a Size</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.newsize ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.newsize}</p>): null}
    </div>
     </div>
     <div className="flex justify-center py-2 mb-5 bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
     <button className="" type='submit'>Merge</button>
      </div>

     </form>
      </div>
    
     </>
  )
}

export default ShowSize