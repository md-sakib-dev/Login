import { useFormik } from 'formik'
import React from 'react'
import { giftSale } from '../../schemas'

const GiftSale = () => {
  const initialValues= {
    serial:"",
    date:"", 
  }
  
  // Destructure formik's properties
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: giftSale,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();
    },
  })
  
  return (
    <div className='w-full h-full mt-20 mx-auto'>
      <div className='grid md:grid-cols-[60fr,40fr] gap-8'>
        {/* First Column */}
        <div className='border-2 border-2xl text-black  col-span-1'>
          <div className='flex flex-col justify-between'>
            <form className='flex flex-col md:flex-row justify-between items-center gap-5' onSubmit={handleSubmit}>
              {/* Voucher Serial Input */}
              <div className="mt-5 flex flex-col gap-0 ml-5">
                <label htmlFor="serial" className='text-sm'>Voucher Serial</label>
                <input type="text" name="serial" id="serial" placeholder="Enter Serial" value={values.serial} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
                {errors.serial && touched.serial && (<p className="text-red-700 text-[12px] font-semibold">{errors.serial}</p>)}
              </div>
              {/* Expire Date Input */}
              <div className="mt-5 flex flex-col gap-0">
                <label htmlFor="date" className='text-sm'>Expire Date</label>
                <input type="date" name="date" id="date" value={values.date} onChange={handleChange} onBlur={handleBlur} placeholder="" className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
                {errors.date && touched.date && (<p className="text-red-700 text-[12px] font-semibold">{errors.date}</p>)}
              </div>
              {/* Submit Button */}
              <div>
                <button type='submit' className="px-4 py-2 bg-red-600 w-28 text-white rounded-lg hover:opacity-90 hover:text-black hover:bg-emerald-500 mr-5 mt-6">Add</button>
              </div>
            </form>
            <div className='mt-5 ml-5 w-90 h-96 bg-amber-200 border-2 rounded-lg mb-5 mr-5'></div>
          </div>
        </div>
        
        {/* Second Column */}
        <div className='border-2 border-2xl text-black w-full  bg-green-500  col-span-1'>
        <p className='text-md font-signature  mt-2  ml-2'>Total Payabale</p>
        <div className='mt-2 ml-2 mr-2'>
        <input type="text" value="0" class="h-16 px-4 text-2xl font-semibold w-full bg-white border border-gray-300 rounded-md text-black "/>
        </div>
        <div className='mt-2 flex flex-col justify-between gap-5'>
          <div className='flex justify-start gap-2 items-center ml-2' >
            <input type="text" value="" class=" px-2  py-2 border border-gray-300  text-black"></input>
            <p>Total Due</p>

          </div>
          <div className='flex justify-start gap-2 items-center ml-2' >
            <input type="text" value="" class=" px-2  py-2 border border-gray-300  text-black"></input>
            <p>Total Recived</p>

          </div> <div className='flex justify-start gap-2 items-center ml-2' >
            <input type="text" value="" class=" px-2  py-2 border border-gray-300  text-black"></input>
            <p>Refund</p>

          </div> <div className='flex justify-start gap-2 items-center ml-2' >
            <input type="text" value="" class=" px-2  py-2 border border-gray-300  text-black"></input>
            <p>Customer Phone</p>

          </div>
          <div class="flex justify-around mt-2">
  <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
    <span class="ml-2 text-gray-700">Cash</span>
  </label>
  <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
    <span class="ml-2 text-gray-700">Card</span>
  </label>
  <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
    <span class="ml-2 text-gray-700">Mobile Payment</span>
  </label>
</div>

        </div>
          

          </div>
        </div>
      </div>
  )
}

export default GiftSale
