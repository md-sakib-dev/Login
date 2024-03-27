import { useFormik } from 'formik'
import React from 'react'
import { mergeGroup } from '../../schemas'
import { IoMdClose } from "react-icons/io";

const ShowMerge = ({closeModal}) => {
    const initialValues={
        group:"",
        newgroup:"",
    }
   const{values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
        validationSchema: mergeGroup,
        onSubmit :(values, action)=>{
          action.resetForm();
        }

    })
  return (
    <>
  
    <div className='  bg-gray-200 backdrop-filter backdrop-blur-sm bg-opacity-10  fixed  left-0 right-0 bottom-0 top-0  '>
    </div>
      <div className='fixed top-[50%] left-[50%] max-w-40rem transform -translate-x-1/2 -translate-y-1/2 bg-green-200  py-8 px-12 border rounded-lg '>

    <div className='flex justify-between items-center gap-2 border-y border-slate-500 py-3 w-full'>
        
     <h1 className='font-signature text-black font-bold text-2xl text-center '>Merge Group</h1>
     <div onClick={closeModal}>
     <IoMdClose color='black'  size={20}/>
   
     </div>
    </div>
     <form className='flex flex-col justify-center md:justify-around items-center text-black mt-5 gap-8'onSubmit={handleSubmit}>
     <div className='flex flex-col md:flex-row md:justify-around gap-8'>
     <div className='flex flex-col gap-2'>
      <p className='text-sm'>Orginal Group Name</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='group' as='select'  value={values.group} onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.group ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.group}</p>): null}
    </div>
    <div className='flex flex-col gap-2'>
      <p className='text-sm'>Group Name To Be Changed</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"   name='newgroup' as='select'  value={values.newgroup} onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.newgroup ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.newgroup}</p>): null}
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

export default ShowMerge