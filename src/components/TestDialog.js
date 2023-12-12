import React from 'react';

const TestDialog = ({ isOpen, setClose, children, small, imp }) => {
  return (
    <div
      className={`fixed inset-0 flex pt-40 justify-center z-50 bg-black bg-opacity-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
          <div
      className={`bg-white rounded-lg shadow-md 
      ${
        small ? 'h-4/5 w-4/5 overflow-y-auto' :imp ? 'w-96 h-40': 'w-96 h-full'
      }
      `}
    >
        <button
          className="absolute text-white  top-3 right-3 text-xl hover:text-white"
          onClick={()=>{setClose(false) }}
        >
          Thoát
        </button>
        {children}
      </div>
    </div>
  );
};

export default TestDialog;