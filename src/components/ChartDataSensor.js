import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CheckboxList from './CheckboxList';
import SimpleDate from './SimpleDate';
import { format } from 'date-fns';

const Chart = () => {
    const data = [
      { resultTime: '2023/11/21', result: 25 },
      { resultTime: '2023/11/22', result: 22},
      { resultTime: '2023/11/23', result: 20},
      { resultTime: '2023/11/24', result: 18 },
      { resultTime: '2023/11/25', result: 21 },
      // ... thêm dữ liệu nhiệt độ khác
    
      ];
      const today = new Date();
  const [dataChart, setDataChart] = useState(data);
  const [timeStar, setTimeStar] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);

      useEffect(() => {
      if(timeEnd!==null&& timeStar!==null){
        const filterDataByDate = () => {
          const filteredData = dataChart.filter(item => {
            const itemDate = format(new Date(item.resultTime), "dd/MM/yyyy");
            const startDate = format(new Date(timeStar), "dd/MM/yyyy");
            const endDate = format(new Date(timeEnd), "dd/MM/yyyy");
        
            return itemDate >= startDate && itemDate <= endDate;
          });
          
        setDataChart(filteredData);
        };
        
        filterDataByDate();
      }
    
      }, [timeEnd,timeStar]);
console.log(dataChart)
      const handleDateChange = (date, type, id) => {
          if(type==='batdau'){
            setTimeStar(date);
          }else if(type==='ketthuc'){
            setTimeEnd(date)
          }
      };
      console.log(timeStar, timeEnd)
  return (
    <div className="py-4 lg:p-4 my-4  w-full border-t-4 border-t-blue-700 border rounded-md">
     { timeEnd!==null&& timeStar!==null&&  <div className='mb-4 p-4 text-xl bg-yellow-500 font-bold text-white rounded-md'>Dữ liệu đo trong thời gian từ {format(new Date(timeStar), "dd/MM/yyyy")} đến {format(new Date(timeEnd), "dd/MM/yyyy")}</div>}
        <div className='block lg:flex items-center'>

        <div className='w-full lg:w-3/4 p-2'>
      <h4 className="text-lg font-semibold mb-4">Biểu đồ theo dõi nhiệt độ của trạm quan trắc</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={200}
          data={dataChart}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="time" /> */}
          <XAxis dataKey="resultTime" />
          <YAxis />
          <Tooltip />
          <Area type="monotone"
           dataKey="result" 
          //  dataKey="temperature" 
           stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
       
        <div className='w-full lg:w-1/4 flex lg:block justify-between items-center p-2 lg:p-0'>
        <div>
        <CheckboxList setDataChart={setDataChart}/>
        </div>
        <div>
        <h2 className="text-xl font-semibold py-1 mt-3">Ngày bắt đầu:</h2>
        <SimpleDate selectedDate={timeStar} onChange={handleDateChange} title={''} type={'batdau'} id={0}/>

        <h2 className="text-xl font-semibold py-1 mt-3">Ngày kết thúc:</h2>
        <SimpleDate selectedDate={timeEnd} onChange={handleDateChange} title={''} type={'ketthuc'} id={0}/>
        
        </div>
        <div>
        <div className='w-full text-center mt-4'>
        <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/5 mb-2">
            Xem Biểu đồ
        </button>
        <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/5 mb-2">
        🖨️ In biểu đồ
        </button>
        <hr/>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Chart;
