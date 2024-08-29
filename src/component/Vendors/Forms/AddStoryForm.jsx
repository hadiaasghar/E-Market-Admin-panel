import React from 'react'
import FormHead from '../../Forms/FormHead'

const AddStoryForm = () => {
  return (
    <>
      <div className='flex flex-col items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 '>
        <FormHead title='Story'/>
        <div className='flex flex-col'>
          <h1 className='text-sm text-black font-semibold p-2'>Choose humbling GIF/Image</h1>
          <div className="flex flex-row">
            <div className="mt-1">
              <input type="file" className="block w-full text-sm p-4 border-gray-300  cursor-pointer mt-3 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <h1 className='text-sm text-black font-semibold p-2'>Select Story Video</h1>
          <div className="flex flex-row">

            <div className="mt-1">
              <input type="file" className="block w-full text-sm p-4 border-gray-300  cursor-pointer mt-3 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddStoryForm
