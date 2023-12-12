
import { React } from "react";
import BarChartBox from "../components/BarChartBox";
import Breadcrumbs from "../components/Breadcrumbs";
import MonitoringStation from "../components/MonitoringStation ";
import PieChartBox from "../components/PieChartBox";
import { localStorageService } from "../utils/localStorageService";

 const chartBoxUser = {
  color: "#0074D9",
  icon: "/temporary/a1.jpg",
  title: "Số lượng trạm theo vùng",
  number: "31",
  dataKey: "Tram",
  chartData: [
    { name: "Sóc Trăng", Tram: 3 },
    { name: "Cần Thơ", Tram: 5 },
    { name: "Hậu Giang", Tram: 4 },
    { name: "Cà Mau", Tram: 7 },
    { name: "Bạc Liêu", Tram: 10 },
    { name: "Trà Vinh", Tram: 2 },
  ],
};
const chartBoxThongBao = {
  color: "#AAAAAA",
  icon: "/temporary/a1.jpg",
  title: "Số lượng thông báo theo vùng (Trong tuần)",
  number: "502",
  dataKey: "ThongBao",
  chartData: [
    { name: "Sóc Trăng", ThongBao: 23 },
    { name: "Cần Thơ", ThongBao: 50 },
    { name: "Hậu Giang", ThongBao: 32 },
    { name: "Cà Mau", ThongBao: 67 },
    { name: "Bạc Liêu", ThongBao: 89 },
    { name: "Trà Vinh", ThongBao: 44 },
  ],
};


export const Home = () => {
    return (
<div className="container mt-20 px-2 lg:mx-4 xl:mx-8  ">
<div className='flex justify-between align-center'>
  {/* <ParentComponent/> */}
      <Breadcrumbs
          breadcrumbs={[
            { label: 'Tổng quan', path: '/quanly/tongquang' },
          ]}
          />

     <div className="shadow-sm rounded-md border border-gray-600 h-12 mt-1 p-2 text-center text-lg font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 cursor-pointer ml-1">
      Mặc định: <b>{ localStorageService.getItem('trammd')}</b>
     </div>
      </div>

    <MonitoringStation />
    <div className="w-full block lg:flex ">
  <div className="lg:w-2/3 w-full block my-8 pr-8">
 <div className="w-full mx-2 mb-4">
 <BarChartBox {...chartBoxUser} />
 </div>
 <div className="w-full m-2">
 <BarChartBox {...chartBoxThongBao} />
 </div>
  </div>

  <div className="lg:w-1/3 w-full my-8 ">
  <PieChartBox/>

  </div>
  </div>
  </div>

    );
  };