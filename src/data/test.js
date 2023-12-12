import React, { useState } from 'react';
import SelectComponent from '../components/SelectComponent';

const ParentComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];



  const handleChange = (value) => {
    setSelectedValue(value);
    // Thực hiện bất kỳ xử lý nào khác dựa trên giá trị mới được chọn.
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <SelectComponent options={options} selectedValue={selectedValue} onChange={handleChange} />
    </div>
  );
};

export default ParentComponent;
