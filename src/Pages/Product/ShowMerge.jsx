import { useFormik } from 'formik'
import React from 'react'
import { mergeGroup } from '../../schemas'

const ShowMerge = () => {
    const initialValues={
        group:"",

    }
   const{values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema: mergeGroup,
        onSubmit :(values,action)=>{
            action.resetForm();
        }

    })
  return (
    <div className='w-80 md:w-full h-full mx-auto border-2 bg-green-500 rounded-2xl mt-20 text-white'>
      
     <h1 className='ffont-signature font-bold text-2xl text-center border-b border-slate-100 py-3'>Merge Group</h1>
     <div className='flex flex-col md:flex-row justify-center md:justify-around items-center mt-5' onSubmit={handleSubmit}>
     <div>
      <p className='text-sm'>Orginal Group Name</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='group' as='select' onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.group && touched.group ?(<p className=" text-red-700 text-[12px]  font-semibold">{errors.group}</p>): null}
    </div>
    <div>
      <p className='text-sm'>Group Name To Be Changed</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='group' as='select' onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.group && touched.group ?(<p className=" text-red-700 text-[12px]  font-semibold">{errors.group}</p>): null}
    </div>
    <div className='flex justify-center  items-center'>

  <button class=" px-4 py-2  bg-red-600  w-32 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500  mb-2 ml-4">Merge Group</button>
  
</div>

     </div>
     </div>
  )
}

export default ShowMerge