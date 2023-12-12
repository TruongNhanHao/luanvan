import React, { useState } from 'react';
import SimpleButton from '../components/SimpleButton';
import TestDialog from '../components/TestDialog';
import DeleteItem from '../components/DeleteItem';
import { ItemInTable } from '../components/IteminTable';
import MethodItem from '../components/MethodItem';
import pdf from '../img/pdf.png'
import icon_chuyenNganh from '../img/icon_chuyenNganh.png'
import Breadcrumbs from '../components/Breadcrumbs';
import { ExcelExportButton } from '../utils/exportFile';
import Alert from '../components/Alert';

const DatatypeManagement = () => {
  // Dữ liệu giả về các loại dữ liệu cảm biến và trạm quan trắc
  const [isDialogOpenCreate, setDialogOpenCreate] = useState(false);
  const [isDialogOpenDelete, setDialogOpenDelete] = useState(false);
  const [isDialogOpenUpdate, setDialogOpenUpdate] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedSensors, setSelectedSensors] = useState([]);

  const [filteredData, setFilteredData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  // const [isDialogOpenGet, setDialogOpenGet] = useState(false);
  // const [isDialogOpenImport, setDialogOpenImport] = useState(false);
  const [isFilterByStation, setIsFilterByStation] = useState(false);


  const dataSensor = [
    { _id: 1, name: '🌡️ Nhiệt Độ', unit: '°C' },
    { _id: 2, name: '💧 Độ Ẩm', unit: '%' },
    { _id: 3, name: '🌬️ Mực nước', unit: 'cm' },
    { _id: 4, name: '💨 Tốc Độ Gió', unit: 'km/h' },
    { _id: 5, name: 'Độ mặn', unit: 'phần nghìn' },
    { _id: 6, name: 'Độ PH', unit: 'Ph' },
    { _id: 7, name: 'Nito', unit: 'mg/kg' },
    { _id: 8, name: 'Kali', unit: 'mg/kg' },
    { _id: 9, name: 'Photo', unit: 'mg/kg' },
    // Thêm loại dữ liệu khác nếu cần
  ]
  const [sensorTypes, setSensorTypes] = useState(dataSensor);
  
  const columnSensorType = [{name:'_id', value:'ID'},{name:'name', value:'Tên Loại Dữ Liệu'}, {name: 'unit', value: 'Đơn vị'}]
   const InputsCreate = [
    {
      title: "name",
      name: "Tên Loại Dữ Liệu",
      type: "string"
    },
    {
      title: "unit",
      name: "Đơn vị",
      type: "string"
  
    },
  ];
  const InputStart = { 
    name: "",
    unit: "",
  }
const handleSensorSelect = (userId, isSelected) => {
    if (isSelected) {
      setSelectedSensors([...selectedSensors, userId]
      );
    } else {
      setSelectedSensors(selectedSensors.filter((id )=> id !==userId));
    }
  };

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
  const filteredTempData = sensorTypes.filter(item => item.unit === station);
  setFilteredData(filteredTempData)
};

const filterBySearchTerm = () => {
 if(searchTerm!==null){
  const filteredTempData = dataSensor.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  setFilteredData(filteredTempData);
 }
};

// Hàm để xử lý mỗi lần người dùng nhập vào ô input
const handleInputChange = (e) => {
  if(e.target.value!==''){
    setSearchTerm(e.target.value);
    filterBySearchTerm();
  }else {
    setFilteredData(dataSensor)
  }
};

console.log(selectedAll, selectedSensors)
  return (
    <div className="container mt-20 px-2 lg:mx-4 xl:mx-8">
     <div className='flex justify-start'>
      <Breadcrumbs
          breadcrumbs={[
            { label: 'Tổng quan', path: '/quanly/tongquan' },
            { label: 'Loại Dữ Liệu', path: '/quanly/loaidulieu' },
          ]}
          />
      </div>
    <div className='w-full px-2 border-t-4 border-t-blue-700 border mt-4 rounded-md'>
      <h1 className="text-2xl font-bold my-4 text-center">Quản lý loại dữ liệu cảm biến trạm quan trắc</h1>
      <hr/>
    
     <div className='flex items-center text-xl text-gray-600 '>
     <img src={pdf} alt="Background" className='w-14 h-14 pr-1 border-b-4 border-blue-600'/>
     <span className='p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>
     <ExcelExportButton tableId="datatype" filename="Xuất danh sách" />
     </span>
     <span className=' p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>Thêm danh sách</span>
     </div>
   
   
    <div className='flex my-2'>

      <SimpleButton title="Cập nhật loại" handleClick={()=>setDialogOpenUpdate(true)}/>
      {selectedSensors?.length===1 &&isDialogOpenUpdate && <TestDialog isOpen={isDialogOpenUpdate} setClose={setDialogOpenUpdate} imp={true}>
      <MethodItem isOpen={isDialogOpenUpdate} InputStart={selectedSensors} InputsCreate={InputsCreate} 
     setAlert={setAlertMessage} setClose={setDialogOpenUpdate} setSelectedItems={selectedSensors}
      url={"/dataType"} title={"Cập nhật loại dữ liệu"} action={'update'}/> </TestDialog>}

     <SimpleButton title="Thêm Loại"  handleClick={()=>setDialogOpenCreate(true)}/>
      {isDialogOpenCreate&& <TestDialog isOpen={isDialogOpenCreate} setClose={setDialogOpenCreate} imp={true}>
    <MethodItem isOpen={isDialogOpenCreate} InputStart={InputStart} InputsCreate={InputsCreate} 
    setAlert={setAlertMessage} setClose={setDialogOpenCreate} setSelectedItems={setSelectedSensors}
    url={"/users"} title={"Thêm loại dữ liệu"} action={'create'}/> </TestDialog>}
      
      <SimpleButton title="Xóa loại" handleClick={()=>setDialogOpenDelete(true)}/>
      {isDialogOpenDelete&& <TestDialog isOpen={isDialogOpenDelete} setClose={setDialogOpenDelete} imp={true}>
          <DeleteItem setSelectedAll={setSelectedAll}  setAlert={setAlertMessage} setClose={setDialogOpenDelete} setSelectedItem={setSelectedSensors} arrayId={selectedSensors} selectedAll={selectedSensors.length=== sensorTypes?.length ?true: false} url={"/products"} title={"Loại dữ liêu"}/>
      </TestDialog>}
      </div>
    
      <Alert message={alertMessage}/>


      <div className='flex items-center border w-full p-3'>
      <div
        className={`w-48 border h-12 p-2 text-center text-lg font-medium text-gray-500 ${
          isFilterByStation ? 'bg-gray-200 hover:bg-gray-200 cursor-pointer' : 'bg-gray-100 hover:cursor-pointer hover:bg-gray-200'
        } shadow-sm`}
        onClick={()=>{ setIsFilterByStation(!isFilterByStation); setFilteredData(null);setSelectedStation(null)}}
      >
        {!isFilterByStation?'Lọc theo đơn vị':'Tìm kiếm loại'} {'\u2193'}
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
                   {sensorTypes.map((station, index) => (
                     <option key={index} value={station.unit}>
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
    
 
      <table className="w-full border text-xl font-medium my-8" id="datatype">
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
          {filteredData!==null&& filteredData.map((sensorType, i) => (
            <ItemInTable key={i}
           items={sensorType}
           columns={columnSensorType}
           isSelected={selectedSensors?.includes(sensorType._id)}
           onSelect={handleSensorSelect}/>
          ))}
           {filteredData===null && sensorTypes.map((sensorType, i) => (
            <ItemInTable key={i}
           items={sensorType}
           columns={columnSensorType}
           isSelected={selectedSensors?.includes(sensorType._id)}
           onSelect={handleSensorSelect}/>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DatatypeManagement;
