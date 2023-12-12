import React, { useEffect, useState } from 'react';
import { thongBaoTram } from '../data/dataThongBao';

const DialogInformation = ({ onClose, data }) => {
  const [item, setItem] = useState({});

  console.log( data)
  useEffect(()=> {
    const getItem = async()=> {
      const items = thongBaoTram.filter(item => item.id === data[0]);
       setItem(items)
       console.log(items)
  
      }
      getItem()
  },[])
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    {item[0] &&<div className="flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
      &#8203;
      <div
        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3 className="font-bold text-center text-xl text-gray-900 mb-4">
                Thông tin
              </h3>
              <div className="flex  border-b border-gray-300 py-4 ">
                <p className="flex-1 text-xl font-medium text-gray-500">
                  Thời gian đo:
                </p>
                <p className='flex-1 text-gray-900 text-md'> {item[0].time}</p>
              </div>
              <div className="flex  border-b border-gray-300 py-4 ">
                <p className="flex-1 text-xl font-medium text-gray-500">
                  Thông báo của vùng: 
                </p>
                <p className='flex-1 text-gray-900 text-md'>Cần Thơ</p>
              </div>
              <div className="flex  border-b border-gray-300 py-4 ">
                <p className="flex-1 text-xl font-medium text-gray-500">
                  Thông báo ở trạm:
                </p>
                <p className='flex-1 text-gray-900 text-md'> {item[0].station}</p>
              </div>
              <div className="flex  border-b border-gray-300 py-4 ">
                <p className="flex-1 text-xl font-medium text-gray-500">
                  Thông báo của loại dữ liệu:
                </p>
                <p className='flex-1 text-gray-900 text-md'> {item[0].dataType}</p>
              </div>
              <div className="flex  border-b border-gray-300 py-4 ">
                <p className="flex-1 text-xl font-medium text-gray-500">
                  Giá trị: 
                </p>
                <p className='flex-1 text-gray-900 text-md'>{item[0].value}</p>
              </div>
              <div className="flex  border-b border-gray-300 py-4 ">
                <p className="flex-1 text-xl font-medium text-gray-500">
                  Cấp độ: 
                </p>
                <p className='flex-1 text-gray-900 text-md'>{item[0].level}</p>
              </div>
              <div className="flex  border-b border-gray-300 py-4 ">
                <p className="flex-1 text-xl font-medium text-gray-500">
                  Lời khuyên:
                </p>
                  <p className='flex-1 text-gray-900 text-md'>{item[0].advice}</p> 
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={onClose}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base  text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-xl font-medium"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>}
    </div>
  );
};

export default DialogInformation;
