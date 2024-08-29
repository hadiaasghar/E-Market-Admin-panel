import React from 'react'
import FormHead from '../../Forms/FormHead'

const RestaurantsDetailForm = () => {
  return (
    <>
        <div className='flex flex-col items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
        <FormHead title='Restaurant Details'/>
          <div className='flex flex-col   mt-5 gap-6'>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col'>
                <p className='text-lg text-black'> Name</p>
                <input type="text" placeholder="Insert  Name" className="w-[25vw] p-3 mt-3 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
              </div>
              <div className='flex flex-col'>
                <p className='text-lg text-black'>Category</p>
                <select className="w-[25vw] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF] text-gray-400">
                  <option value="">Select a cuisines</option>
                  <option value="food">italian</option>
                  <option value="food">Sandwiches</option>
                  <option value="food">Bar Food</option>
                </select>
              </div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col'>
                <p className='text-lg text-black'>Phone</p>
                <input type="text" placeholder="Enter your phone" className="w-[25vw] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
              </div>
              <div className='flex flex-col'>
                <p className='text-lg text-black'>Address</p>
                <input type="text" placeholder="Insert Address" className="w-[25vw] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
              </div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col'>
                <p className='text-lg text-black'>Zone</p>
                <select className="w-[25vw] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF] text-gray-400">
                  <option value="">Select Zone</option>
                  <option value="World Wide">World Wide</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <p className='text-lg text-black'> Latitude</p>
                <input type="text" placeholder="Insert  Latitude" className="w-[25vw] p-3 mt-3 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
              </div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col'>
                <p className='text-lg text-black'> Longitude</p>
                <input type="text" placeholder="Insert  Longitude" className="w-[25vw] p-3 mt-3 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
              </div>
              <div className="flex flex-col ">
                <label className=" text-lg  text-black">Image</label>
                <div className="mt-1">
                  <input type="file" className="block w-full text-lg  border-gray-300  cursor-pointer mt-3 focus:outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='text-lg text-black'>Description</p>
              <textarea
                placeholder="Enter description here..."
                className="w-full h-40 pt-3 px-3 mt-3 border border-gray-300 rounded-lg bg-[#F5F5F5] focus:outline-none focus:border-[#267FFF] text-start"
                rows="4"
              >
              </textarea>
            </div>
          </div>
        </div>
    </>
  )
}

export default RestaurantsDetailForm
