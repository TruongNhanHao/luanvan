// MonitoringStation.js
import React, { useState } from 'react';

const MonitoringStation = () => {
  const [exceededThreshold, setExceededThreshold] = useState(false);

  const thresholdValues = {
    data1: 35,
    data2: 8,
    data3: 4,
    data4: 25,
  };

  const stationData = {
    data1: 32,
    data2:7,
    data3: 5,
    data4: 22,
  };
  const titleStation = ['Nhiệt Độ (°C)', 'Độ PH (pH)', 'Oxi Hòa Tan (mg/l)', 'Độ Mặn (ppt)']
  const checkExceededThreshold = () => {
    for (const key in stationData) {
      if (stationData[key] > thresholdValues[key]) {
        return true;
      }
    }
    return false;
  };

  if (!exceededThreshold && checkExceededThreshold()) {
    setExceededThreshold(true);
  }

  return (
    <div className="container mx-auto mt-4 lg:mt-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.keys(stationData).map((key, index) => (
          <div
            key={index}
            className={`p-6 bg-white border rounded-lg shadow-md ${
              stationData[key] > thresholdValues[key] ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <p className="text-gray-600 font-bold mb-2">{titleStation[index]}</p>
            <div className="flex items-center justify-between">
              <span className={`text-4xl ${stationData[key] > thresholdValues[key] ? 'text-red-500' : ''}`}>
                {stationData[key]}
              </span>
              {stationData[key] > thresholdValues[key] ? (
                <span className="text-red-500 text-4xl" role="img" aria-label="Exceeded">
                  ↑ 
                </span>
              ) : (
                <span className="text-green-500 text-4xl" role="img" aria-label="Normal">
                  ↓
                </span>
              )}
            </div>
            <p className="text-sm mt-2 block xl:flex items-center">
              <span className="mr-2 text-lg">Ngưỡng cho phép: {thresholdValues[key]}</span>
              <span className={`font-bold ${
                stationData[key] > thresholdValues[key] ? 'text-red-500' : 'text-green-500'
              }`}>
                {stationData[key] > thresholdValues[key] ? (
                  <span className="flex items-center text-lg">
                    <span className="mr-1" role="img" aria-label="Exceeded">
                      ❌
                    </span>
                    Đã vượt quá
                  </span>
                ) : (
                  <span className="flex items-center text-lg">
                    <span className="mr-1" role="img" aria-label="Normal">
                      ✅
                    </span>
                    Bình thường
                  </span>
                )}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringStation;
