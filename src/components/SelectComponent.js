import React from 'react';

const SelectComponent = ({ options, selectedValue, onChange }) => {
  return (
    <select
      className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
