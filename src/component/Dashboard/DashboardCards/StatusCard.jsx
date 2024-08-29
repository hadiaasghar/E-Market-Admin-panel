import React from 'react';
import PropTypes from 'prop-types';

const StatusCard = ({ title, value, icon }) => (
  <div className="flex justify-between bg-gray-50 shadow-sm shadow-primary-200 rounded-lg p-5 flex items-center gap-2">
    <div className="flex gap-2 text-primary-900">
      {icon}
    <h3 className="text-gray-700 text-md font-bold">{title}</h3>
    </div>
    <div>
      <span className="text-xl font-bold text-primary-900">{value}</span>
    </div>
  </div>
);

StatusCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
};

export default StatusCard;
