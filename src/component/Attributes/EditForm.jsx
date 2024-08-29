//validation done

import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const EditForm = ({ title, initialValues, onSave, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <div className="relative w-[80%] mx-auto my-10 p-4 border m-4 rounded-lg">
      <h2 className='absolute -top-4 px-2 bg-primary-900 rounded'>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-black mb-2">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`border w-[60%] ${errors.name ? 'border-primary-500' : 'border-primary-300'}`}
          />
          {errors.name && <p className="text-pr-500 text-sm">{errors.name.message}</p>}
        </div>
        {/* Add more form fields as needed */}
        <div className='my-4'>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
          <button type="button" onClick={onBack} className="bg-gray-500 text-white p-2 rounded ml-2">Back</button>
        </div>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  title: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};


export default EditForm;


// import React from 'react';
// import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';

// const EditForm = ({ title, initialValues, onSave, onBack }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: initialValues,
//   });

//   const onSubmit = (data) => {
//     if (typeof onSave === 'function') {
//       onSave(data);
//     } else {
//       console.error('onSave is not a function');
//     }
//   };

//   return (
//     <div className="relative w-[80%] mx-auto my-10 p-4 border m-4 rounded-lg">
//       <h2 className='absolute -top-4 px-2 bg-primary-900 rounded'>{title}</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block text-black mb-2">Name</label>
//           <input
//             type="text"
//             {...register('name', { required: 'Name is required' })}
//             className={`border w-[60%] ${errors.name ? 'border-primary-500' : 'border-primary-300'}`}
//           />
//           {errors.name && <p className="text-pr-500 text-sm">{errors.name.message}</p>}
//         </div>
//         <div className='my-4'>
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
//           <button type="button" onClick={onBack} className="bg-gray-500 text-white p-2 rounded ml-2">Back</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// EditForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   initialValues: PropTypes.object.isRequired,
//   onSave: PropTypes.func.isRequired,
//   onBack: PropTypes.func.isRequired,
// };

// EditForm.defaultProps = {
//   onSave: () => {},  // No-op function as a default value
//   onBack: () => {},  // No-op function as a default value
// };

// export default EditForm;
