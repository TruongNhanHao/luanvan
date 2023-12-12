import React, { useEffect, useState } from 'react';
import SimpleButton from '../components/SimpleButton';
import TestDialog from '../components/TestDialog';
import DeleteItem from '../components/DeleteItem';
import Alert from '../components/Alert';
import { ItemInTable } from '../components/IteminTable';
import MethodItem from '../components/MethodItem';
import pdf from '../img/pdf.png'
import icon_chuyenNganh from '../img/icon_chuyenNganh.png'
import Breadcrumbs from '../components/Breadcrumbs';
import { ExcelExportButton } from '../utils/exportFile';
import { publicRequestTram } from '../requestMethods';
import MethodItemUpdate from '../components/MethodItemUpdate';

const SensorDevices = () => {
  // Dữ liệu giả về các loại dữ liệu cảm biến và trạm quan trắc
  const [isDialogOpenCreate, setDialogOpenCreate] = useState(false);
  const [isDialogOpenDelete, setDialogOpenDelete] = useState(false);
  const [isDialogOpenUpdate, setDialogOpenUpdate] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedSensors, setSelectedSensors] = useState([]);

  const [searchTerm, setSearchTerm] = useState(null);
  //OPTION SELECTION
  const [filteredData, setFilteredData] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  // const [isDialogOpenGet, setDialogOpenGet] = useState(false);
  // const [isDialogOpenImport, setDialogOpenImport] = useState(false);
  const [isFilterByStation, setIsFilterByStation] = useState(false);

   //HIỂN THỊ
  const [sensorTypes, setSensorTypes] = useState([]);
   const columnSensorType = [{name:'id', value:'ID'},{name:'name', value:'Tên Thiết Bị'}, {name: 'protocolType', value: 'Giao thức'}
  ,{name: 'description', value: 'Mô tả'}]
   const InputsCreate = [
    {
      title: "name",
      name: "Tên Thiệt Bị",
      type: "string"
    },

    {
      title: "description",
      name: "Mô tả",
      type: "string"
    },
    {
      title: "protocolType",
      name: "Giao thức",
      type: "string"
    },
  ];
  const InputStart = { 
      name: '',
      description: '',
      protocolType: '',
  }

  useEffect(()=> {
    const getItem = async()=> {
        const res = await publicRequestTram.get(`sensors`);
       if(res.status===200){
         console.log(res.data)
         setSensorTypes(res.data)
        //  console.log(sensorTypes)
        }
  
      }
      getItem()
  },[alertMessage])
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
  const userIdArray = sensorTypes.map((user) => user.id);
  setSelectedSensors(userIdArray)
}
setSelectedAll(!selectedAll)
}

const handleSelectStation = (station) => {
  setSelectedStation(station);
  const filteredTempData = sensorTypes.filter(item => item.protocolType === station);
  setFilteredData(filteredTempData)
};

const filterBySearchTerm = () => {
  if(searchTerm!==null){
    const filteredTempData = sensorTypes.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  setFilteredData(filteredTempData);
  }
};

// Hàm để xử lý mỗi lần người dùng nhập vào ô input
const handleInputChange = (e) => {
  if(e.target.value!==''){
    setSearchTerm(e.target.value);
    filterBySearchTerm();
  }else {
    setFilteredData(sensorTypes)
  }
};

console.log(selectedAll, selectedSensors)
  return (
    <div className="container mt-20 px-2 lg:mx-4 xl:mx-8">
     <div className='flex justify-start'>
      <Breadcrumbs
          breadcrumbs={[
            { label: 'Tổng quan', path: '/quanly/tongquan' },
            { label: 'Thiết bị cảm biến', path: '/quanly/thietbicambien' },
          ]}
          />
      </div>
    <div className='w-full px-2 border-t-4 border-t-blue-700 border mt-4 rounded-md'>
      <h1 className="text-2xl font-bold my-4 text-center">Quản lý thiết bị cảm biến trạm quan trắc</h1>
      <hr/>
    
     <div className='flex items-center text-xl text-gray-600 '>
     <img src={pdf} alt="Background" className='w-14 h-14 pr-1 border-b-4 border-blue-600'/>
     <span className='p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>
     <ExcelExportButton tableId="datatype" filename="thietbi" />
     </span>
     <span className=' p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>Thêm danh sách</span>
     </div>

    <div className='flex my-2'>

      <SimpleButton title="Cập nhật thiết bị" handleClick={()=>setDialogOpenUpdate(true)}/>
      {selectedSensors?.length===1 &&isDialogOpenUpdate && <TestDialog isOpen={isDialogOpenUpdate} setClose={setDialogOpenUpdate} imp={true}>
      <MethodItemUpdate data={sensorTypes} isOpen={isDialogOpenUpdate} InputStart={selectedSensors} InputsCreate={InputsCreate} 
     setAlert={setAlertMessage} setClose={setDialogOpenUpdate} setSelectedItems={setSelectedSensors}
      url={"/sensors"} title={"Cập nhật thiết bị"} action={'update'}/> </TestDialog>}

     <SimpleButton title="Thêm Thiết Bị"  handleClick={()=>setDialogOpenCreate(true)}/>
      {isDialogOpenCreate&& <TestDialog isOpen={isDialogOpenCreate} setClose={setDialogOpenCreate} imp={true}>
    <MethodItem isOpen={isDialogOpenCreate}  InputStart={InputStart} InputsCreate={InputsCreate} 
    setAlert={setAlertMessage} setClose={setDialogOpenCreate} setSelectedItems={setSelectedSensors}
    url={"/sensors"} title={"Thêm thiết bị"} action={'create'}/> </TestDialog>}
       
      <SimpleButton title="Xóa Thiết Bị" handleClick={()=>setDialogOpenDelete(true)}/>
      {isDialogOpenDelete&& <TestDialog isOpen={isDialogOpenDelete} setClose={setDialogOpenDelete} imp={true}>
          <DeleteItem setSelectedAll={setSelectedAll}  setAlert={setAlertMessage} setClose={setDialogOpenDelete} setSelectedItem={setSelectedSensors} 
          arrayId={selectedSensors} selectedAll={selectedSensors.length=== sensorTypes?.length ?true: false} url={"/sensors"} title={"thiết bị cảm biến"}/>
      </TestDialog>}
      </div>
    <Alert  message={alertMessage}/>
      <div className='flex items-center border w-full p-3'>
      <div
        className={`w-48 border h-12 p-2 text-center text-lg font-medium text-gray-500 ${
          isFilterByStation ? 'bg-gray-200 hover:bg-gray-200 cursor-pointer' : 'bg-gray-100 hover:cursor-pointer hover:bg-gray-200'
        } shadow-sm`}
        onClick={()=>{ setIsFilterByStation(!isFilterByStation); setFilteredData(null);setSelectedStation(null)}}
      >
        {!isFilterByStation?'Lọc giao thức':'Tìm kiếm thiết bị'} {'\u2193'}
      </div>
      <div className='flex items-center'>
        {isFilterByStation ? (
                   <select
                   className='w-80 p-3 border-none outline-none focus:ring focus:border-blue-300 mr-1'
                   value={selectedStation || ''}
                   onChange={(e) => handleSelectStation(e.target.value)}
                 >
                   <option value="" disabled>
                     Chọn giao thức
                   </option>
                   {sensorTypes.map((station, index) => (
                     <option key={index} value={station.protocolType}>
                       {station.protocolType}
                     </option>
                   ))}
                 </select>
       
        ) : (
          <input
            type="text"
            placeholder='Tìm kiếm tên thiết bị'
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
           isSelected={selectedSensors?.includes(sensorType.id)}
           onSelect={handleSensorSelect}/>
          ))}
           {filteredData===null&&sensorTypes.length>0  && sensorTypes.map((sensorType, i) => (
            <ItemInTable key={i}
           items={sensorType}
           columns={columnSensorType}
           isSelected={selectedSensors?.includes(sensorType.id)}
           onSelect={handleSensorSelect}/>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default SensorDevices;
