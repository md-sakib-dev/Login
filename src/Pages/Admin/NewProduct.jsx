import { useFormik } from 'formik'
import React from 'react'
import { addProductSchema } from '../../schemas'
import { Link } from 'react-router-dom'

const NewProduct = () => {
  const initialValues={
    group:"",
    category:"",
    size:"",
    name:"",
    brand:"",
    type:"",
    message:"",
    price:"",
    house:"",

  }
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema: addProductSchema,
    onSubmit:(values,action)=>{
      action.resetForm();
    }
  })
  return (
    <div className='mt-20 w-full h-full mx-auto '>
       <h1 className='text-center text-3xl font-signature font-semibold'>Add New Product</h1> 
<div className='text-center md:text-left'>
  
<Link to="/editproduct" class="px-4 py-2  bg-red-600  w-32 text-white  rounded-lg   hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-2 mt-2">Edit Product</Link>
</div>

        <form className='mt-5  border w-80 md:w-full  rounded-lg' onSubmit={handleSubmit}>

        <div className=' flex flex-col md:flex-row justify-around items-center mt-2 md:mt-5 gap-2 '>
    <div>
<select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-48 h-10 font-semibold" name='group' as='select' onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.group && touched.group ?(<p className=" text-red-700 text-sm  font-semibold">{errors.group}</p>): null}
    </div>
    <div className=''>
    <select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-48  h-10 font-semibold" name='category' as='select' onChange={handleChange}>
            <option value="" >Select an Category</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.category && touched.category ?(<p className=" text-red-700 font-semibold w-full break-words">{errors.category}</p>): null}
    </div>
    <div className=''>
    <select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-48  h-10 font-semibold" name='size' as='select' onChange={handleChange}>
            <option value="" >Select an Size</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.size && touched.size ?(<p className=" text-red-700 font-semibold">{errors.size}</p>): null}
    </div>
</div>
<div className='flex flex-col md:flex-row justify-around items-center mt-2 md:mt-5 gap-2'>
<div className='flex flex-col gap-0'>
    <label for="id" class="mb-2 text-sm">Product Name</label>
   <input  type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder=''  class="border  border-gray-300 rounded-md px-2 py-2 mb-2 w-48"/>
   {errors.name && touched.name ? (<p className="text-red-700 font-semibold">{errors.name}</p>):null}
    </div>
    <div className=''>
    <select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-48  h-10 font-semibold" name='brand' as='select' onChange={handleChange}>
            <option value="" >Select a Brand</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.brand && touched.brand ?(<p className=" text-red-700 font-semibold">{errors.brand}</p>): null}
    </div>
    <div className=''>
    <select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-48  h-10 font-semibold" name='type' as='select' onChange={handleChange}>
            <option value="" >Select a Type</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.type && touched.type ?(<p className=" text-red-700 font-semibold">{errors.type}</p>): null}
    </div>
    


</div>
<div className=' flex flex-col md:flex-row justify-around items-center md:items-start mt-2 md:mt-5 gap-2'>
<div className='md:ml-4'>
  <select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-48  h-10 font-semibold" name='house' as='select' onChange={handleChange}>
            <option value="" >Select a Warehouse</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.house && touched.house ?(<p className=" text-red-700 font-semibold">{errors.house}</p>): null}
  </div>
  <div className='md:ml-10'>
  <div className='flex flex-col gap-0 '>
    <label for="id" class="mb-2 text-sm">Product Name</label>
   <input  type="number" name="price" id="price" value={values.price} onChange={handleChange} onBlur={handleBlur} placeholder=''  class="border  border-gray-300 rounded-md px-2 py-2 mb-2 w-48"/>
   {errors.price && touched.price ? (<p className="text-red-700 font-semibold">{errors.price}</p>):null}
    </div>
  </div>
  <div>
  <textarea id="message" name="message" rows="4" cols="5" placeholder="Enter Product's description" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-64"></textarea>
  {errors.message && touched.message ? (
    <p className="text-red-700 font-semibold">{errors.message}</p>
  ) : null}

  </div>
  
  

</div>

<div className='flex justify-center  items-center'>

  <button class=" px-4 py-2  bg-red-600  w-32 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500  mb-2 ml-4">ADD</button>
  
</div>
        </form>
       

      </div>
  )
}

export default NewProduct