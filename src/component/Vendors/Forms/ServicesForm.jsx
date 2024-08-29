import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography'; // Import Typography for text styling
import FormHead from '../../Forms/FormHead';

const ServicesForm = () => {
  return (
    <>
      <div className='flex flex-col rounded-lg border border-gray-300 m-14 max-w-4xl mx-auto p-10 '>
        <FormHead title='Services' />
        <div className='flex flex-col mt-3'>
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Free Wi-Fi</Typography>} // Increased text size
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Good for Breakfast</Typography>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Good for Dinner</Typography>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Good for Lunch</Typography>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Live Music</Typography>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Outdoor Seating</Typography>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Takes Reservation</Typography>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="h6">Vegetarian Friendly</Typography>}
          />
        </div>
      </div>
    </>
  );
}

export default ServicesForm;
