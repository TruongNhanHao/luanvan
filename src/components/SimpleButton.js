import React from 'react';

const SimpleButton = ({title, handleClick}) => {
  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-1 md:px-2 py-1 md:py-2 lg:px-4 m-2 rounded-full shadow-md">
     {title}
    </button>
  );
};

export default SimpleButton;
