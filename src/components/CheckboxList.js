import React, { useEffect, useState } from 'react';
import { publicRequestTram } from '../requestMethods';
import { format, parseISO } from 'date-fns';
const dataCharts = [
  { resultTime: '2023/11/21', result: 25 },
  { resultTime: '2023/11/22', result: 22},
  { resultTime: '2023/11/23', result: 20},
  { resultTime: '2023/11/24', result: 18 },
  { resultTime: '2023/11/25', result: 21 },
  // ... thêm dữ liệu nhiệt độ khác

  ];
const DataRadio = ({ label, selected, onChange }) => {
  return (
    <label className="flex items-center space-x-2 p-1" >
      <input
        type="radio" 
        checked={selected}
        onChange={onChange}
        className="form-radio h-5 w-5 text-blue-500"
      />
      <span className="text-md text-gray-700">{label}</span>
    </label>
  );
};

const RadioList = ({setDataChart}) => {
  const [selectedData, setSelectedData] = useState('th');
  const [sensorThings, setSensorThings] = useState(null);

  useEffect(()=> {
    const getItem = async()=> {
        const res = await publicRequestTram.get(`things`);
       if(res.status===200){
         console.log(res.data)
         setSensorThings(res.data)
         setSelectedData(res.data[0].multiDataStreamDTOs[0].multiDataStreamId)
         const respone = await publicRequestTram.get(`observations/dataStreamId/${res.data[0].multiDataStreamDTOs[0].multiDataStreamId}`);
         if(respone.status===200){
          const testD = [...respone.data]
          let updatedDataArray = testD.map(item => ({
            ...item,
            resultTime: testDate(item.resultTime)
          }));
          setDataChart(updatedDataArray)
          }
          
        }
      }
      getItem()
  },[])

const testDate =(updateDate)=> {
  const cleanedTimeString = updateDate.replace(/\[UTC\]/g, '');
  const resultTimeDate = parseISO(cleanedTimeString);
  const t =format(new Date(resultTimeDate), "dd/MM/yyyy");
  return t;
}

  const handleRadioChange = async (dataKey) => {
    setSelectedData(dataKey);
   try {
     const respone = await publicRequestTram.get(`observations/dataStreamId/${dataKey}`);
     if(dataKey===1){
       console.log( dataKey)
    setDataChart(dataCharts)
  }else {
    if(respone.status===200){
     const testD = [...respone.data]
     let updatedDataArray = testD.map(item => ({
       ...item,
       resultTime: testDate(item.resultTime)
     }));
     setDataChart(updatedDataArray)
     console.log(updatedDataArray)
     }
  }

   } catch (error) {
    console.log("Loi goi data Date")
   }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Chọn loại dữ liệu</h2>
     {sensorThings!==null&& sensorThings.map((res)=> (
      res.multiDataStreamDTOs.map((item, i)=> (
      <React.Fragment
      key={i}
      >
        <DataRadio
        label={item.multiDataStreamName}
        selected={selectedData === item.multiDataStreamId}
        onChange={() => handleRadioChange(item.multiDataStreamId)}
        />
        </React.Fragment>
        ))
       ))}
    </div>
  );
};

export default RadioList;
