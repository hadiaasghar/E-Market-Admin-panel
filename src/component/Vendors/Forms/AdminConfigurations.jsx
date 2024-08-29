import React from 'react'
import FormHead from '../../Forms/FormHead'

const AdminConfigurations = () => {
  return (
    <>
      <div className='flex flex-col items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
        <FormHead title='Admin Configurations'/>
        <div className='flex flex-col   mt-5 gap-6'>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col'>
              <p className='text-lg text-black'>First Name</p>
              <input type="text" placeholder="Insert First Name" className="w-[25vw] p-3 mt-3 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg text-black'>Last Name</p>
              <input type="text" placeholder="Insert Last Name" className="w-[25vw] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col'>
              <p className='text-lg text-black'>Email</p>
              <input type="text" placeholder="Enter your email" className="w-[25vw] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg text-black'>Password</p>
              <input type="text" placeholder="Enter Your password" className="w-[25vw] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg text-black'>phone</p>
            <input type="text" placeholder="Enter Your phone no.." className="w-[25vw] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
          </div>
          <div className="flex flex-col">
            <label className=" text-lg  text-black">Image</label>
            <div className="mt-1">
              <input type="file" className="block w-full text-lg  border-gray-300  cursor-pointer mt-3 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminConfigurations
