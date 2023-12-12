import React, { useState } from 'react';
import SimpleButton from '../components/SimpleButton';
import pdf from '../img/pdf.png'
import icon_chuyenNganh from '../img/icon_chuyenNganh.png'
import Breadcrumbs from '../components/Breadcrumbs';

const StationControl = () => {
  // Dữ liệu giả về các trạm quan trắc và thiết bị
  const [isFilterByStation, setIsFilterByStation] = useState(true);
  const [selectedStation, setSelectedStation] = useState(null);

  const dataController=[
    {
      id: 1,
      name: 'HG1-Tháp Mười',
      devices: [
        { id: 11, name: 'Cảm Biến Nhiệt Độ', status: 'Bật' },
        { id: 12, name: 'Cảm Biến Độ Ẩm', status: 'Tắt' },
        // Thêm thiết bị khác nếu cần
      ],
    },
    {
      id: 2,
      name: 'HG2-Lương Nghĩa',
      devices: [
        { id: 21, name: 'Cảm Biến Áp Suất', status: 'Bật' },
        { id: 22, name: 'Cảm Biến Độ mặn', status: 'Tắt' },
        // Thêm thiết bị khác nếu cần
      ],
    },
    {
      id: 3,
      name: 'ST1-Trần Đề',
      devices: [
        { id: 11, name: 'Cảm Biến Nhiệt Độ', status: 'Tắt' },
        { id: 12, name: 'Cảm Biến Độ Ẩm', status: 'Bật' },
        // Thêm thiết bị khác nếu cần
      ],
    },
    // Thêm trạm khác nếu cần
  ]
  const [stations, setStations] = useState(dataController);
  const handleToggleDeviceStatus = (stationId, deviceId) => {
    // Đảo ngược trạng thái của thiết bị dựa trên ID của trạm và thiết bị
    const updatedStations = stations.map((station) => {
      if (station.id === stationId) {
        const updatedDevices = station.devices.map((device) =>
          device.id === deviceId
            ? { ...device, status: device.status === 'Bật' ? 'Tắt' : 'Bật' }
            : device
        );
        return { ...station, devices: updatedDevices };
      }
      return station;
    });

    setStations(updatedStations);
  };
  const handleSelectStation = (station) => {
    if(station!=='xoa'){
      setSelectedStation(station);
    const filteredTempData = dataController.filter(item => item.name === station);
    setStations(filteredTempData)
    }else if(station==='xoa'){
      setSelectedStation(null);
      setStations(dataController)
      console.log(1)
    }
  };
  const updateDeviceStatusForAllStations = (newStatus) => {
    const updatedDataController = dataController.map(station => ({
      ...station,
      devices: station.devices.map(device => ({
        ...device,
        status: newStatus,
      })),
    }));
    setStations(updatedDataController);
  };
  
console.log(isFilterByStation)
  return (
    <>
    <div className="container mt-20 px-2 lg:mx-4 xl:mx-8">
    <div className='flex justify-start'>
      <Breadcrumbs
          breadcrumbs={[
            { label: 'Tổng quan', path: '/quanly/tongquan' },
            { label: 'Điều khiển', path: '/quanly/dieukhien' },
          ]}
          />
      </div>
    <div className='w-full px-2 border-t-4 border-t-blue-700 border mt-4 rounded-md'>
      <h1 className="text-2xl font-bold my-4 text-center">Điều Khiển Thiết Bị Trạm Quan Trắc</h1>
     <hr/>
     <div className='flex items-center text-xl text-gray-600 '>
     <img src={pdf} alt="Background" className='w-14 h-14 pr-1 border-b-4 border-blue-600'/>
     <span className=' p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>Xuất danh sách</span>
     <span className=' p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>Thêm danh sách</span>
     </div>
     <div className='flex my-2'>
      <div onClick={() => updateDeviceStatusForAllStations('Bật')}>
        <SimpleButton title="Bật tất cả điều khiển" />
      </div>
      <div onClick={() => updateDeviceStatusForAllStations('Tắt')}>
        <SimpleButton title="Tắt tất cả điều khiển" />
      </div>
    </div>
     <div className='flex items-center border w-full p-3'>
      <div
        className={`w-48 border h-12 p-2 text-center text-lg font-medium text-gray-500 ${
          isFilterByStation ? 'bg-gray-200 hover:bg-gray-200 cursor-pointer' : 'bg-gray-100 hover:cursor-pointer hover:bg-gray-200'
        } shadow-sm`}
        // onClick={()=> setIsFilterByStation(!isFilterByStation)}
      >
        {!isFilterByStation?'Lọc theo trạm':'Tìm kiếm trạm'} {'\u2193'}
      </div>
      <div className='flex items-center'>
        {isFilterByStation ? (
                   <select
                   className='w-80 p-3 border-none outline-none focus:ring focus:border-blue-300 mr-1'
                   value={selectedStation || ''}
                   onChange={(e) => handleSelectStation(e.target.value)}
                 >
                   <option value="" disabled>
                     Chọn trạm
                   </option>
                   {dataController.map((station, index) => (
                     <option key={index} value={station.name}>
                       {station.name}
                     </option>
                   ))}
                        <option  value={'xoa'}>
                       {'Xóa lọc'}
                     </option>
                 </select>
       
        ) : (
          <input
            type="text"
            placeholder='Tìm kiếm điều khiển'
            className="w-80 p-3 border-none outline-none focus:ring focus:border-blue-300 mr-1"
          />
        )}
        <img src={icon_chuyenNganh} alt="Background" className='w-14 h-12'/>
      </div>
    </div>
    {stations.map((station, i) => (
  <div key={station.id} className="my-4 lg:my-8">
    <h2 className="text-xl font-bold mb-2">{i+1}. {station.name}</h2>
    <table className="min-w-full border text-xl font-medium">
      <thead>
        <tr className='bg-gray-200'>
          {/* <th className="py-2 px-4 border w-20 lg:w-32">Thao tác</th> */}
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Tên Thiết Bị</th>
          <th className="py-2 px-4 border-b">Trạng Thái</th>
          <th className="py-2 px-4 border-b">Điều Khiển</th>
        </tr>
      </thead>
      <tbody>
        {station.devices.map((device) => (
          <tr key={device.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border">{device.id}</td>
            <td className="py-2 px-4 border">{device.name}</td>
            <td className={`py-2 px-4 border ${device.status === 'Bật' ? 'text-green-500' : 'text-red-500'}`}>
              {device.status}
            </td>
            <td className="py-2 px-4 border">
              <button
                className={`${
                  device.status === 'Bật' ? 'bg-red-500' : 'bg-green-500'
                } text-white py-1 px-2 rounded mr-2`}
                onClick={() => handleToggleDeviceStatus(station.id, device.id)}
              >
                {device.status === 'Bật' ? 'Tắt' : 'Bật'}
              </button>
              {/* Thêm các nút điều khiển khác nếu cần */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
))}

    </div>
    </div>
    </>
  );
};

export default StationControl;
