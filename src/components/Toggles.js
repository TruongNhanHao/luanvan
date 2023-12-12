import React, { useState } from 'react';

const Toggles = ({setIsOpenChart, isOpenChart}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  setIsOpenChart(!isOpenChart)
  };

  return ( 
    <div className="flex items-center z-auto"  
    >
        <span className={`relative text-medium ml-2 ${isToggled ? 'text-blue-700' : 'text-gray-500'}`}>{isToggled ? 'Xem biểu đồ' : 'Tắt biểu đồ'}</span>
      <label className="relative inline-flex items-center mx-1 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isToggled}
          onChange={handleToggle}
        />
        <div className={`relative w-14 h-8 bg-gray-300 rounded-full p-1 transition ${isToggled ? 'bg-blue-700' : 'bg-gray-400'}`}>
          <div className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform ${isToggled ? 'translate-x-6' : 'translate-x-0'} transition`}></div>
        </div>
      </label>
    </div>
  );
};

export default Toggles;
