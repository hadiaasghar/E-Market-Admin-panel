import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography'; // Import Typography for text styling
import FormHead from '../../Forms/FormHead';

const ActiveForm = () => {
  return (
    <>
      <div className='flex flex-col  rounded-lg border border-gray-300 max-w-4xl  mx-auto p-10'>
        <FormHead title='Restaurant (Activate/Deactivate)' />
        <div className='p-2'>
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Active</Typography>} // Increased text size
          />
        </div>
      </div>
    </>
  )
}

export default ActiveForm
