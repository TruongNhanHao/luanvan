import React, { useState } from 'react';
import { ItemInTable } from '../components/IteminTable';
import SimpleButton from '../components/SimpleButton';
import DialogInformation from '../components/DialogInformation';
import { thongBaoTram } from '../data/dataThongBao';

const ThongBao = () => {
  // Dữ liệu giả về các loại dữ liệu cảm biến và trạm quan trắc
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedSensors, setSelectedSensors] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  
  const closeDialog = () => {
    setDialogOpen(false);
  };
  const [sensorTypes, setSensorTypes] = useState(thongBaoTram);
   const columnSensorType = [{name:'station', value:'Trạm thông báo'},{name:'message', value:'Thông báo'}, {name: 'time', value: 'Ngày tạo'}]
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
console.log(selectedAll, selectedSensors)
  return (
    <div className="container mt-20 px-2 lg:mx-4 xl:mx-8">
    <div className='w-full px-2 border-t-4 border-t-blue-700 border mt-4 rounded-md'>
      <h1 className="text-2xl font-bold my-4 text-center">DANH SÁCH THÔNG BÁO</h1>
      <hr/>
      <SimpleButton title="Xem chi tiết"  handleClick={()=>setDialogOpen(true)}/>
      {isDialogOpen &&selectedSensors.length===1 && <DialogInformation onClose={closeDialog} data={selectedSensors} />} 
      <table className="w-full border text-lg font-medium my-4">
        <thead>
          <tr className='bg-gray-200'>
          <th className="py-2 border w-28">Chọn
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
          {sensorTypes.map((sensorType, i) => (
            <ItemInTable key={i}
           items={sensorType}
           mat={true}
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

export default ThongBao;
