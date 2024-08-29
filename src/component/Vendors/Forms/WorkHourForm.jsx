import React, { useState } from 'react';
import { MdFolderCopy } from 'react-icons/md';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import FormHead from '../../Forms/FormHead';

const WorkHoursform = () => {
  const [hours, setHours] = useState({});
  const [showDays, setShowDays] = useState(false);
  const [timeValues, setTimeValues] = useState({}); // State to store time for each day

  // Function to toggle the visibility of the days section
  const toggleDays = () => {
    setShowDays(!showDays);
  };

  // Function to toggle the visibility of input fields for each day
  const toggleDay = (day) => {
    setHours(prev => ({ ...prev, [day]: !prev[day] }));
  };

  // Function to handle time change for each day
  const handleTimeChange = (newValue, day) => {
    setTimeValues(prev => ({ ...prev, [day]: newValue }));
  };

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
      <div className='flex flex-col items-center juatify-center rounded-lg border border-gray-300 m-12 max-w-4xl  mx-auto p-10 '>
        <FormHead title='Working Hours'/>
        <div className='flex flex-col'>
          <button
            className='rounded-lg bg-[#267FFF] px-5 py-3 text-lg text-white mt-3'
            onClick={toggleDays}
          >
            Add working hours
          </button>
          {showDays && (
            <div className="flex flex-col mt-4">
              {days.map((day, index) => (
                <div key={index} className="flex flex-col items-center mt-2">
                  <span className="text-black font-semibold text-2xl mb-1">{day}</span>
                  <button
                    className="bg-[#267FFF] text-white text-2xl px-3 py-1 rounded"
                    onClick={() => toggleDay(day)}
                  >
                    Add
                  </button>
                  {hours[day] && (
                    <div className="flex mt-2">
                      <div className='flex flex-row gap-4'>
                        <div className='flex flex-col'>
                          <p className='text-lg text-black'>From</p>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                              label="--:-- --"
                              value={timeValues[day]}
                              onChange={(newValue) => handleTimeChange(newValue, day)}
                              renderInput={(params) => <TextField {...params} />}
                            />
                          </LocalizationProvider>
                        </div>

                        <div className='flex flex-col'>
                          <p className='text-lg text-black'>To</p>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                              label="--:-- --"
                              value={timeValues[day]}
                              onChange={(newValue) => handleTimeChange(newValue, day)}
                              renderInput={(params) => <TextField {...params} />}
                            />
                          </LocalizationProvider>
                        </div>
                        <div className='flex flex-col'>
                          <p className='text-lg text-black'>Actions</p>
                          <button className="ml-2 bg-green-500 text-white px-5 py-5 rounded flex items-center">
                            <MdFolderCopy />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkHoursform;
