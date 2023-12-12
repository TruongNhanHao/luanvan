
import React, { useEffect, useState } from 'react';
import SimpleButton from '../components/SimpleButton';
import TestDialog from '../components/TestDialog';
import DeleteItem from '../components/DeleteItem';
import { ItemInTable } from '../components/IteminTable';
import MethodItem from '../components/MethodItem';
import pdf from '../img/pdf.png'
import icon_chuyenNganh from '../img/icon_chuyenNganh.png'
import { ExcelExportButton } from '../utils/exportFile';
import Toggles from '../components/Toggles';
import Chart from '../components/ChartDataSensor';
import Breadcrumbs from '../components/Breadcrumbs';
import Alert from '../components/Alert';
import { localStorageService } from '../utils/localStorageService';
import { publicRequestTram } from '../requestMethods';

const SensorTypeManagement = () => {
  const [isDialogOpenCreate, setDialogOpenCreate] = useState(false);
  const [isDialogOpenDelete, setDialogOpenDelete] = useState(false);
  const [isDialogOpenUpdate, setDialogOpenUpdate] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedSensors, setSelectedSensors] = useState([]);
  // const [isDialogOpenImport, setDialogOpenImport] = useState(false);
  // const [isDialogOpenGet, setDialogOpenGet] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  
const dataSensorTypes = [
  {_id:1, type: 'Nhiệt độ', value: 25, unit: '°C', timestamp: '2023-01-01T08:00:00' },
  {_id:2, type: 'Độ Mặn', value: 19, unit: 'ppt', timestamp: '2023-01-01T08:15:00' },
  { _id:3,type: 'Độ pH', value: 6, unit: 'pH', timestamp: '2023-01-01T08:30:00' },
]

  const [isFilterByStation, setIsFilterByStation] = useState(false);
  const [isOpenChart, setIsOpenChart] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);
  const [sensorTypes, setSensorTypes] = useState(dataSensorTypes);

  const columnSensorType = [{name:'type', value:'Loại dữ liệu'},{name:'value', value:'Giá trị gần nhất'}, {name: 'unit', value: 'Đơn vị'},{name:'timestamp',value:'Thời Gian'}]
  
   const InputStart = { 
    _id:1, type: 'Nhiệt độ', value: 25, unit: '°C', timestamp: '2023-01-01T08:00:00'
  }
  
   const InputsCreate = [
    {
      title: "type",
      name: "Loại dữ liệu",
      type: "string"
    },
    {
      title: "value",
      name: "Giá trị gần nhất",
      type: "number"
    },
    {
      title: "unit",
      name:"Đơn vị",
      type: "string"
    },
  ];
const handleSensorSelect = (userId, isSelected) => {
    if (isSelected) {
      setSelectedSensors([...selectedSensors, userId]
      );
    } else {
      setSelectedSensors(selectedSensors.filter((id )=> id !==userId));
    }
  };

  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await publicRequestTram.get('things');
  
  //       if (res.status === 200) {
  //         console.log(res.data);
  
  //         const newSensorTypes = [];
  
  //         await Promise.all(
  //           res.data.flatMap(async (item, index) => {
  //             return await Promise.all(
  //               item.multiDataStreamDTOs.map(async (itemMuiStream, i) => {
  //                 try {
  //                   const response = await publicRequestTram.get(
  //                     `observations/dataStreamId/${itemMuiStream.multiDataStreamId}/latest`
  //                   );
  
  //                   if (response.status === 200) {
  //                     console.log(response.data);
  //                     const isThingIdExist = newSensorTypes.some(
  //                       (sensor) =>
  //                         sensor.id === res.data[index].thingId &&
  //                         sensor.multiDataStreamId ===
  //                           res.data[index].multiDataStreamDTOs[i].multiDataStreamId
  //                     );
  
  //                     if (isThingIdExist) {
  //                       console.log('Tồn tại trong mảng');
  //                     } else {
  //                       console.log('Chưa tồn tại trong mảng');
  
  //                       newSensorTypes.push({
  //                         id: res.data[index].thingId,
  //                         name: res.data[index].nameThing,
  //                         multiDataStreamId: res.data[index].multiDataStreamDTOs[i].multiDataStreamId,
  //                         dulieudo: response.data.result,
  //                         time: response.data.resultTime,
  //                       });
  //                     }
  //                   }
  //                 } catch (error) {
  //                   console.error('Error fetching observation data:', error);
  //                 }
  //               })
  //             );
  //           })
  //         );
  
  //         setSensorTypes(newSensorTypes);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching things:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, [alertMessage]);
  

  console.log(sensorTypes)
  


const handleSensorSelectAll = ()=> {
if(selectedAll){
  setSelectedSensors([]);    
}else{
  const userIdArray = sensorTypes.map((user) => user._id);
  setSelectedSensors(userIdArray)
}
setSelectedAll(!selectedAll)
}
const handleSelectStation = (station) => {
  setSelectedStation(station);
  const filteredTempData = dataSensorTypes.filter(item => item.unit === station);
  setFilteredData(filteredTempData)
};

const filterBySearchTerm = () => {
if(searchTerm!==null){
  const filteredTempData = dataSensorTypes.filter(item => item.type.toLowerCase().includes(searchTerm.toLowerCase()));
  setFilteredData(filteredTempData);
}
};

// Hàm để xử lý mỗi lần người dùng nhập vào ô input
const handleInputChange = (e) => {
  if(e.target.value!==''){
    setSearchTerm(e.target.value);
    filterBySearchTerm();
  }else {
    setFilteredData(dataSensorTypes)
  }
};

console.log(selectedAll, selectedSensors)
  return (
    <div className="container mt-20 px-2 lg:mx-4 xl:mx-8">
      <div className='flex justify-start'>
      <Breadcrumbs
          breadcrumbs={[
            { label: 'Tổng quan', path: '/quanly/tongquan' },
            { label: 'Dữ liệu cảm biến', path: '/quanly/dulieucambien' },
          ]}
          />
      </div>
    <div className='w-full px-2 border-t-4 border-t-blue-700 border mt-4 rounded-md'>
      <h1 className="text-2xl font-bold my-4 text-center">Quản lý dữ liệu cảm biến trạm quan trắc</h1>
      <hr/>
     <div className='flex items-center text-xl text-gray-600 '>
     <img src={pdf} alt="Background" className='w-14 h-14 pr-1 border-b-4 border-blue-600'/>
     <span className='p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>
     <ExcelExportButton tableId="dulieudo" filename="DuLieuDo" />
     </span>
     <span className='p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>Thêm danh sách</span>
     </div>
      <div className='flex my-2'>
      <SimpleButton title="Cập nhật Dữ liệu" handleClick={()=>setDialogOpenUpdate(true)} imp={true}/>
      {selectedSensors?.length===1 &&isDialogOpenUpdate && <TestDialog isOpen={isDialogOpenUpdate} setClose={setDialogOpenUpdate}>
      <MethodItem isOpen={isDialogOpenUpdate} InputStart={selectedSensors} InputsCreate={InputsCreate} 
     setAlert={setAlertMessage} setClose={setDialogOpenUpdate} setSelectedItems={selectedSensors}
      url={"/sensorType"} title={"Cập nhật loại dữ liệu"} action={'update'}/> </TestDialog>}

     <SimpleButton title="Thêm Dữ Liệu"  handleClick={()=>setDialogOpenCreate(true)}/>
      {isDialogOpenCreate&& <TestDialog isOpen={isDialogOpenCreate} setClose={setDialogOpenCreate} imp={true}>
    <MethodItem isOpen={isDialogOpenCreate} InputStart={InputStart} InputsCreate={InputsCreate} 
     setAlert={setAlertMessage} setClose={setDialogOpenCreate} setSelectedItems={setSelectedSensors}
      url={"/users"} title={"Thêm loại dữ liệu"} action={'create'}/> </TestDialog>}
      
      <SimpleButton title="Xóa Dữ Liệu" handleClick={()=>setDialogOpenDelete(true)}/>
      {isDialogOpenDelete&& <TestDialog isOpen={isDialogOpenDelete} setClose={setDialogOpenDelete} imp={true}>
          <DeleteItem setSelectedAll={setSelectedAll}  setAlert={setAlertMessage} setClose={setDialogOpenDelete} setSelectedItem={setSelectedSensors} arrayId={selectedSensors}  selectedAll={selectedSensors.length=== sensorTypes?.length ?true: false} url={"/products"} title={"Loại dữ liêu"}/>
      </TestDialog>}
      </div>
    
      <Alert message={alertMessage}/>

      <div className='block xl:flex  items-center justify-between border w-full p-2'>
      <div className='flex items-center'>
      <div
        className={`w-48 border h-12 p-2 text-center text-lg font-medium text-gray-500 bg-gray-200 hover:cursor-pointer hover:bg-gray-300 shadow-sm`}
        onClick={()=> {setIsFilterByStation(!isFilterByStation); setFilteredData(null);setSelectedStation(null)}}
      >
        {!isFilterByStation?'Lọc theo Đơn vị':'Tìm kiếm Loại'} {'\u2193'}
      </div>
      <div className='flex items-center'>
        {isFilterByStation ? (
                   <select
                   className='w-80 p-3 border-none outline-none focus:ring focus:border-blue-300 mr-1'
                   value={selectedStation || ''}
                   onChange={(e) => handleSelectStation(e.target.value)}
                 >
                   <option value="" disabled>
                     Chọn đơn vị
                   </option>
                   {dataSensorTypes.map((station, index) => (
                     <option key={index} value={station.unit} className='text-black'>
                       {station.unit}
                     </option>
                   ))}
                 </select>
       
        ) : (
          <input
            type="text"
            placeholder='Tìm kiếm loại'
            onChange={handleInputChange}

            className="w-80 p-3 border-none outline-none focus:ring focus:border-blue-300 mr-1"
          />
        )}
        <img src={icon_chuyenNganh} alt="Background" className='w-14 h-12'/>
      </div>
      </div>
      <div className='flex items-center my-3 xl:my-0'>
     <Toggles setIsOpenChart={setIsOpenChart} isOpenChart={isOpenChart}/>
      <div className="shadow-sm rounded-md border border-blue-600 h-12 p-2 text-center text-lg font-medium text-blue-600 bg-gray-100 hover:bg-gray-200 cursor-pointer ml-1">
      Mặc định: <b>{ localStorageService.getItem('trammd')}</b>
     </div>
     </div>
    </div>

      <table className="w-full border text-lg font-medium my-8" id="dulieudo" >
        <thead>
          <tr className='bg-gray-200'>
          <th className="py-2 border w-28">Thao tác  
      <input type="checkbox" checked={selectedAll} 
       onChange={handleSensorSelectAll}
       className="rounded border-gray-300 shadow-sm ml-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />          
            </th>
            {columnSensorType?.map((item, i)=> (
              <th key={i} className="py-2 px-4 border">{item.value}</th>
            ))
        }
          </tr>
        </thead>
        <tbody>
          {/* {sensorTypes.map((sensorType, i) => (
            <ItemInTable key={i}
           items={sensorType}
           columns={columnSensorType}
           isSelected={selectedSensors?.includes(sensorType._id)}
           onSelect={handleSensorSelect}/>
          ))} */}
            {filteredData!==null&& filteredData.map((sensorType, i) => (
            <ItemInTable key={i}
           items={sensorType}
           columns={columnSensorType}
           isSelected={selectedSensors?.includes(sensorType._id)}
           onSelect={handleSensorSelect}/>
          ))}
           {filteredData===null&& sensorTypes!==null && sensorTypes.map((sensorType, i) => (
            <ItemInTable key={i}
           items={sensorType}
           columns={columnSensorType}
           isSelected={selectedSensors?.includes(sensorType._id)}
           onSelect={handleSensorSelect}/>
          ))}
        </tbody>
      </table>
    </div>
   {isOpenChart&& <Chart/>}
    </div>
  );
};

export default SensorTypeManagement;
