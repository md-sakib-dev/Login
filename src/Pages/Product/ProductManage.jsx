import { useState } from 'react'

const ProductManage = () => {
  const [showModal,setShowModal]=useState(false)
  const closeModal=()=>{
    return serShowModal(false)
  }
  return (
    <div className='w-80 md:w-full h-full mx-auto border-2 bg-green-500 rounded-2xl mt-20 text-white'>
      
     <h1 className='ffont-signature font-bold text-2xl text-center border-b border-slate-100 py-3'>Product Merge</h1>
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
      <p className='text-sm'>Group Name To Be Merged</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='group' as='select' onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.group && touched.group ?(<p className=" text-red-700 text-[12px]  font-semibold">{errors.group}</p>): null}
    </div>

         
      
      
    </div>
  )
}

export default ProductManage