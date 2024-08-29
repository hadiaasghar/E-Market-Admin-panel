//validation done


import React from 'react';
import { useForm } from 'react-hook-form';
import { FaRegSave } from 'react-icons/fa';
import { MdSettingsBackupRestore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

const DriverDetailForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // You can handle the form submission here
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-5'>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 -top-4 flex items-center justify-center bg-primary-900 text-white p-2 rounded-lg">
              <h1 className='text-sm font-semibold'>Driver details</h1>
            </div>
          </div>
          <div className='flex items-center justify-center rounded-lg border border-gray-300 m-14 max-w-4xl mx-auto p-10 '>
            <div className='flex flex-col mt-5 gap-6'>
              <div className='flex flex-row gap-4'>
                <div className='flex flex-col'>
                  <label className='text-lg text-black'>First Name</label>
                  <input
                    type="text"
                    placeholder="Insert Name"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-[25vw] h-[7vh] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                </div>
                <div className='flex flex-col'>
                  <label className='text-lg text-black'>Last Name</label>
                  <input
                    type="text"
                    placeholder="Insert Name"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-[25vw] h-[7vh] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                </div>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='flex flex-col'>
                  <label className='text-lg text-black'>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-[25vw] h-[7vh]  p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
                <div className='flex flex-col'>
                  <label className='text-lg text-black'>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                    className="w-[25vw] h-[7vh] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='flex flex-col'>
                  <label className='text-lg text-black'>Phone</label>
                  <input
                    type="text"
                    placeholder="Enter your phone"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-[25vw] h-[7vh] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                </div>
                <div className='flex flex-col'>
                  <label className='text-lg text-black'>Zone</label>
                  <select
                    {...register('zone', { required: 'Zone is required' })}
                    className="w-[25vw] h-[7vh] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900 text-gray-400"
                  >
                    <option value="">Select Zone</option>
                    <option value="World Wide">World Wide</option>
                  </select>
                  {errors.zone && <span className="text-red-500 text-sm">{errors.zone.message}</span>}
                </div>
              </div>
              <label className='text-lg'>
                * Do not know your coordinates? use
                <a href="https://www.latlong.net/" className='text-red-600'>
                  Latitude and Longitude Finder
                </a>
              </label>
              <div className='flex flex-row gap-4'>
                <div className='flex flex-col'>
                  <label className='text-lg text-black'>Latitude</label>
                  <input
                    type="text"
                    placeholder="Insert Latitude"
                    {...register('latitude', { required: 'Latitude is required' })}
                    className="w-[25vw] h-[7vh] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.latitude && <span className="text-red-500 text-sm">{errors.latitude.message}</span>}
                </div>
                <div className='flex flex-col'>
                  <label className='text-lg text-black'>Longitude</label>
                  <input
                    type="text"
                    placeholder="Insert Longitude"
                    {...register('longitude', { required: 'Longitude is required' })}
                    className="w-[25vw] h-[7vh] p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.longitude && <span className="text-red-500 text-sm">{errors.longitude.message}</span>}
                </div>
              </div>
              <div className='flex flex-row gap-4'>
                <div className="flex flex-col">
                  <label className="text-lg text-black">Profile Image</label>
                  <div className="mt-1">
                    <input
                      type="file"
                      {...register('profileImage', { required: 'Profile image is required' })}
                      className="block w-full text-lg border-gray-300 cursor-pointer mt-3 focus:outline-none focus:border-blue-500"
                    />
                    {errors.profileImage && <span className="text-red-500 text-sm">{errors.profileImage.message}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 -top-4 flex items-center justify-center bg-primary-900 text-white p-2 rounded-lg">
              <h1 className='text-sm font-semibold'>Driver (Activate/Deactivate)</h1>
            </div>
          </div>
          <div className='flex items-center justify-center rounded-lg border border-gray-300 m-14 max-w-4xl mx-auto p-10 '>
            <div className='p-8'>
              <FormControlLabel
                control={<Checkbox {...register('isActive')} />}
                label={<Typography variant="h6">Active</Typography>} // Increased text size
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 -top-4 flex items-center justify-center bg-primary-900 text-white p-2 rounded-lg">
              <h1 className='text-sm font-semibold'>Car Details</h1>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-gray-300 m-14 max-w-4xl mx-auto p-10">
            <div className="flex flex-col mt-5 gap-6">
              <div className="w-[100%] flex flex-row gap-4">
                <div className="flex w-[50%] flex-col">
                  <p className="text-lg text-black">Car Number</p>
                  <input
                    type="text"
                    placeholder="Insert car number"
                    {...register('carNumber', { required: 'Car number is required' })}
                    className="p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.carNumber && <span className="text-red-500 text-sm">{errors.carNumber.message}</span>}
                </div>
                <div className="flex w-[50%] flex-col">
                  <p className="text-lg text-black">Car Type</p>
                  <input
                    type="text"
                    placeholder="Insert car type"
                    {...register('carType', { required: 'Car type is required' })}
                    className="p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.carType && <span className="text-red-500 text-sm">{errors.carType.message}</span>}
                </div>
              </div>
              <div className="w-[100%] flex flex-row gap-4">
                <div className="flex w-[50%] flex-col">
                  <p className="text-lg text-black">Car Year</p>
                  <input
                    type="text"
                    placeholder="Insert car year"
                    {...register('carYear', { required: 'Car year is required' })}
                    className="p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.carYear && <span className="text-red-500 text-sm">{errors.carYear.message}</span>}
                </div>
                <div className="flex w-[50%] flex-col">
                  <p className="text-lg text-black">Car Plate</p>
                  <input
                    type="text"
                    placeholder="Insert car plate"
                    {...register('carPlate', { required: 'Car plate is required' })}
                    className="p-3 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
                  />
                  {errors.carPlate && <span className="text-red-500 text-sm">{errors.carPlate.message}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mb-5 gap-4'>
          <button
            type="submit"
            className="flex justify-center items-center bg-primary-900 text-white p-2 px-6 gap-2 rounded-lg hover:bg-primary-700"
          >
            <FaRegSave />
            Save
          </button>
          <Link
            to="/drivers/all"
            className="flex justify-center items-center  text-primary-900 p-2 px-6 gap-2 rounded-lg "
          >
            <MdSettingsBackupRestore />
            Reset
          </Link>
        </div>
      </form>
    </>
  );
};

export default DriverDetailForm;
