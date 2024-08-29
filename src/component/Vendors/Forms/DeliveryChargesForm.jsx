import React from 'react'
import FormHead from '../../Forms/FormHead'

const DeliveryChargesFrom
 = () => {
  return (
    <>
      <div className='flex flex-col items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
        <FormHead title='Delivery Charges' />
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <p className='text-xl mt-3 text-black'> Delivery Charges Per km</p>
            <input
              type="text"
              placeholder="2"
              className="w-[50vw] p-3 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
              readOnly
            />
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <p className='text-xl mt-3 text-black'> Minimum Delivery Charges</p>
              <input
                type="text"
                placeholder="8"
                className="w-[50vw] p-3 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
                readOnly
              />
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-col'>
                <p className='text-xl mt-3 text-black'> Minimum Delivery Charges Within Km</p>
                <input
                  type="text"
                  placeholder="5"
                  className="w-[50vw] p-3 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliveryChargesFrom

