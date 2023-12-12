import React, { useEffect, useState } from 'react';
import SimpleButton from '../components/SimpleButton';
import TestDialog from '../components/TestDialog';
import DeleteItem from '../components/DeleteItem';
import { ItemInTable } from '../components/IteminTable';
import MethodItem from '../components/MethodItem';
import pdf from '../img/pdf.png'
import icon_chuyenNganh from '../img/icon_chuyenNganh.png'
import Breadcrumbs from '../components/Breadcrumbs';
import { ExcelExportButton } from '../utils/exportFile';
import { publicRequestTram } from '../requestMethods';
import Alert from '../components/Alert';

const SensorStationManagement = () => {
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
  const [sensorStation, setSensorStation] = useState([]);
   const columnSensorType = [{name:'id', value:'ID'},{name:'name', value:'Tên Thiết Bị'}
  ,{name: 'description', value: 'Mô tả'}, {name: 'status.station', value: 'Trạng thái'}, {name: 'stations.thing.nameThing', value: 'Thuộc vùng'}, {name: 'station.thing.multiDataStreamDTOs', value: 'Các Thiết Bị'}]
   const InputsCreate = [
    {
      title: "name",
      name: "Tên Thiệt Bị",
      type: "string"
    },
    {
      title: "status",
      name: "Trạng thái",
      type: "string"
    },
    {
      title: "description",
      name: "Mô tả",
      type: "string"
    },
    {
      title: "node",
      name: "Ghi chú",
      type: "string"
    },
    {
      title: "thingId",
      name: "Mã đối tượng trạm",
      type: "string"
    },
  ];
  const InputStart = { 
      name: '',
      status: 'Active',
      description: 'test des',
      node:'test node',
      thingId:'',
  }

  useEffect(()=> {
    const getItem = async()=> {
        const res = await publicRequestTram.get(`stations`);
       if(res.status===200){
         console.log(res.data)
         setSensorStation(res.data)
        //  console.log(senSorsApi)
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
  const userIdArray = sensorStation.map((user) => user.id);
  setSelectedSensors(userIdArray)
}
setSelectedAll(!selectedAll)
}

const handleSelectStation = (station) => {
  setSelectedStation(station);
  const filteredTempData = sensorStation.filter(item => item.name === station);
  setFilteredData(filteredTempData)
};

const filterBySearchTerm = () => {
  if(searchTerm!==null){
    const filteredTempData = sensorStation.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  setFilteredData(filteredTempData);
  }
};

// Hàm để xử lý mỗi lần người dùng nhập vào ô input
const handleInputChange = (e) => {
  if(e.target.value!==''){
    setSearchTerm(e.target.value);
    filterBySearchTerm();
  }else {
    setFilteredData(sensorStation)
  }
};

console.log(selectedAll, selectedSensors)
  return (
    <div className="container mt-20 px-2 lg:mx-4 xl:mx-8">
     <div className='flex justify-start'>
      <Breadcrumbs
          breadcrumbs={[
            { label: 'Tổng quan', path: '/quanly/tongquan' },
            { label: 'Trạm cảm biến', path: '/quanly/tramcambien' },
          ]}
          />
      </div>
    <div className='w-full px-2 border-t-4 border-t-blue-700 border mt-4 rounded-md'>
      <h1 className="text-2xl font-bold my-4 text-center">Quản lý loại dữ liệu cảm biến trạm quan trắc</h1>
      <hr/>
    
     <div className='flex items-center text-xl text-gray-600 '>
     <img src={pdf} alt="Background" className='w-14 h-14 pr-1 border-b-4 border-blue-600'/>
     <span className='p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>
     <ExcelExportButton tableId="datatype" filename="thietbi" />
     </span>
     <span className=' p-4 h-14 border-b-4 border-blue-100 hover:border-blue-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>Thêm danh sách</span>
     </div>

    <div className='flex my-2'>

      <SimpleButton title="Cập nhật Trạm" handleClick={()=>setDialogOpenUpdate(true)}/>
      {selectedSensors?.length===1 &&isDialogOpenUpdate && <TestDialog isOpen={isDialogOpenUpdate} setClose={setDialogOpenUpdate} imp={true}>
      <MethodItem isOpen={isDialogOpenUpdate} InputStart={selectedSensors} InputsCreate={InputsCreate} 
     setAlert={setAlertMessage} setClose={setDialogOpenUpdate} setSelectedItems={selectedSensors}
      url={"/stations"} title={"Cập nhật trạm"} action={'update'}/> </TestDialog>}

     <SimpleButton title="Thêm Trạm" handleClick={()=>setDialogOpenCreate(true)}/>
      {isDialogOpenCreate&& <TestDialog isOpen={isDialogOpenCreate} setClose={setDialogOpenCreate} imp={true}>
    <MethodItem isOpen={isDialogOpenCreate} InputStart={InputStart} InputsCreate={InputsCreate} 
    setAlert={setAlertMessage} setClose={setDialogOpenCreate} setSelectedItems={setSelectedSensors}
    url={"/stations"} title={"Thêm trạm QT"} action={'create'}/> </TestDialog>}
      
      <SimpleButton title="Xóa Trạm" handleClick={()=>setDialogOpenDelete(true)}/>
      {isDialogOpenDelete&& <TestDialog isOpen={isDialogOpenDelete} setClose={setDialogOpenDelete} imp={true}>
          <DeleteItem setSelectedAll={setSelectedAll}  setAlert={setAlertMessage} setClose={setDialogOpenDelete} setSelectedItem={setSelectedSensors} 
          arrayId={selectedSensors} selectedAll={selectedSensors.length=== sensorStation?.length ?true: false} url={"/stations"} title={"Trạm quan trắc"}/>
      </TestDialog>}
      </div>
    
      <div className='flex items-center border w-full p-3'>
      <div
        className={`w-48 border h-12 p-2 text-center text-lg font-medium text-gray-500 ${
          isFilterByStation ? 'bg-gray-200 hover:bg-gray-200 cursor-pointer' : 'bg-gray-100 hover:cursor-pointer hover:bg-gray-200'
        } shadow-sm`}
        onClick={()=>{ setIsFilterByStation(!isFilterByStation); setFilteredData(null);setSelectedStation(null)}}
      >
        {!isFilterByStation?'Lọc theo tên':'Tìm kiếm mô tả'} {'\u2193'}
      </div>
      <div className='flex items-center'>
        {isFilterByStation ? (
                   <select
                   className='w-80 p-3 border-none outline-none focus:ring focus:border-blue-300 mr-1'
                   value={selectedStation || ''}
                   onChange={(e) => handleSelectStation(e.target.value)}
                 >
                   <option value="" disabled>
                     Chọn tên trạm
                   </option>
                   {sensorStation.map((station, index) => (
                     <option key={index} value={station.name}>
                       {station.name}
                     </option>
                   ))}
                 </select>
       
        ) : (
          <input
            type="text"
            placeholder='Tìm kiếm mô tả'
            onChange={handleInputChange}
            className="w-80 p-3 border-none outline-none focus:ring focus:border-blue-300 mr-1"
          />
        )}
        <img src={icon_chuyenNganh} alt="Background" className='w-14 h-12'/>
      </div>
    </div>
    
    <Alert message={alertMessage}/>
 
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
           {filteredData===null && sensorStation.map((sensorType, i) => (
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

export default SensorStationManagement;
