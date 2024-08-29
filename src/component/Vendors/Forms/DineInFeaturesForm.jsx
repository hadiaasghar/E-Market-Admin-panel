import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import FormHead from '../../Forms/FormHead';

const DineInFeaturesFrom = () => {
  const [isDineInEnabled, setIsDineInEnabled] = useState(false); // State to track checkbox
  const [timeValues, setTimeValues] = useState({
    from: null,
    to: null,
  }); // State to store time values

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsDineInEnabled(event.target.checked);
  };

  // Function to handle time change
  const handleTimeChange = (newValue, field) => {
    setTimeValues((prev) => ({ ...prev, [field]: newValue }));
  };

  return (
    <>
      <div className="flex flex-col items-start justify-center rounded-lg border border-gray-300 m-14 max-w-4xl mx-auto p-10">
        <FormHead title='DINE IN Feature Setting' />
        <div className="p-8">
          <FormControlLabel
            control={<Checkbox checked={isDineInEnabled} onChange={handleCheckboxChange} />}
            label={<Typography variant="h6">Enable Dine In Feature</Typography>}
          />
        </div>
        {isDineInEnabled && (
          <div>
            <div className="flex flex-row gap-4  ">
              <div className="flex flex-col ">
                <p className="text-lg text-black px-16">Opening time</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="px-16 "> {/* Wrapper div with Tailwind CSS width class */}
                    <TimePicker
                      label="--:-- --"
                      value={timeValues.from}
                      onChange={(newValue) => handleTimeChange(newValue, 'from')}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </LocalizationProvider>
              </div>
              <div className="flex flex-col ]">
                <p className="text-lg text-black">Closing time</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="--:-- --"
                    value={timeValues.to}
                    onChange={(newValue) => handleTimeChange(newValue, 'to')}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex flex-col px-16 mt-3">
              <p className="text-lg text-black">Cost</p>
              <input type="text" placeholder="" className="w-[25vw] p-3 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]" />
            </div>
            <div className="flex flex-col py-3 px-16 mt-3">
              <label className=" text-lg  text-black"> Menu Card Images</label>
              <div className="mt-1">
                <input type="file" className="block w-full text-lg  border-gray-300  cursor-pointer mt-3 focus:outline-none focus:border-blue-500" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DineInFeaturesFrom;
