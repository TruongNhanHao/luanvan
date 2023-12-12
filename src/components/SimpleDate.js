import { format } from 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const SimpleDate = ({ selectedDate, onChange, title, type ,id}) => {
  const handleDateChange = (date) => {
    onChange(date, type, id);
   
    // console.log( )
  };

  return (
    <div>
      <h2>{title}</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
        isClearable // Hiển thị nút để xóa ngày
        className="border p-2"
      />
    </div>
  );
}

export default SimpleDate;
