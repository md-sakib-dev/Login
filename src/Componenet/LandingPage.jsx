import React from 'react';
import { TfiReload } from "react-icons/tfi";
import pic2 from '../assets/sales.png';

const LandingPage = () => {
  const Cardlist = [
    {
      name: "Sales Today",
      p: "2.53",
      percent: "+28%",
      p1: "Since Last Month",
      b: "Today",
    },
    {
      name: "Visitors",
      p: "170.212",
      percent: "-14%",
      p1: "Since Last Month",
      b: "Annual",
    },
    {
      name: "Total Earnings",
      p: "$24.300",
      percent: "+18%",
      p1: "Since Last Month",
      b: "Monthly",
    },
    {
      name: "Sales Today",
      p: "2.53",
      percent: "+28%",
      p1: "Since Last Month",
      b: "Today",
    },
  ];

  return (
    <div className='w-full max-h-full text-black mt-20 '>
      <div className='flex flex-col md:flex-row justify-between gap-5 border-b border-b-slate-300 py-5'>
        <div>
          <h1 className='text-2xl font-signature font-semibold'>Admin Dashboard</h1>
          <p className='mt-2'>Welcome Back, We've missed you.👏</p>
        </div>
        <div className='flex items-center gap-5'>
          <TfiReload size={20} color='green' />
          <button className='text-white py-2 px-3 bg-green-500'>Today: March 14</button>
        </div>
      </div>
      <div className='mt-5 grid md:grid-cols-4 gap-8 '>
        {Cardlist?.map((item, index) => {
          return (
            <div key={index} className='flex justify-between w-72 md:w-full rounded-lg bg-slate-200'>
              <div className='flex flex-col justify-between ml-3'>
                <div className='flex justify-between w-full'>
                  <p className='text-lg font-medium'>{item.name}</p>
                  <button className='text-white px-1 rounded-lg bg-green-500'>{item.b}</button>
                </div>
                <p className='text-2xl font-bold'>{item.p}</p>
                <div className='flex gap-6'>
                  <p className='text-green-500'>{item.percent}</p>
                  <p className='text-sm font-normal'>{item.p1}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-10 flex justify-between gap-2'>
        <div>
        <h1 className='text-2xl text-center font-signature font-bold mb-5'>Sales Revenue</h1>
        <img src={pic2} alt="Sales Revenue" className='mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
