import React from 'react';
import PropTypes from 'prop-types';

const CardBox = ({ title, value, icon }) => (
  <div className="shadow-sm shadow-primary-200 rounded-lg flex flex-col gap-5 bg-gray-50 p-4">
    <div className="flex items-center justify-between">
      <h3 className="text-gray-700 text-lg font-bold">{title}</h3>
      <div className="text-white bg-primary-900 rounded-md">{icon}</div>
    </div>
    <p className="text-[1.2rem] font-bold text-black">{value}</p>
  </div>
);

CardBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
};

export default CardBox;
