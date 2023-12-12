import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import { Home } from "./pages/Home";
import Notification from "./components/Notification";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import StationControl from "./pages/StationControl";
import SensorStationManagement from "./pages/SensorStationManagement ";
import SensorTypeManagement from "./pages/SensorTypeManagement";
import FarmStationManagement from "./pages/FarmManagement ";
import InformationPage from "./components/Infomation";
import ThongBao from "./pages/ThongBao";
import Login from "./components/Login";
import DatatypeManagement from "./pages/DatatypeManagement";
import MapContainer from "./components/MapContainer ";
import SensorDevices from "./pages/SensorDevices";
import MultiStreams from "./pages/MultiStreams";
import { localStorageService } from "./utils/localStorageService";
const  App =()=> {
  const isQuanLy = window.location.pathname.startsWith('/quanly');
  // const isUser = localStorageService.getItem('user')

  // if (!isUser) {
  //   // Redirect to the login page if there is no user information
  //   return <Redirect to="/login" />;
  // }

  return (
    <>
   
    <div>
         {isQuanLy && <Notification />}
        <div className="flex min-h-screen bg-gray-100">
        {isQuanLy && <Sidebar />}
        <Router>
          <Routes>
            <Route path="/quanly/tongquan" element={<Home />} />
            {/* <Route path="/quanly/tramcambien" element={<SensorStationManagement />} />
            <Route path="/quanly/cauhinhtram" element={<MultiStreams />} />
            <Route path="/quanly/thietbicambien" element={<SensorDevices />} />
            <Route path="/quanly/vungcanhtac" element={<FarmStationManagement />} /> */}

            <Route path="/quanly/stations" element={<SensorStationManagement />} />
            <Route path="/quanly/multi-data-streams" element={<MultiStreams />} />
            <Route path="/quanly/sensors" element={<SensorDevices />} />
            <Route path="/quanly/things" element={<FarmStationManagement />} />

            <Route path="/quanly/dieukhien" element={<StationControl />} />
            <Route path="/quanly/dulieucambien" element={<SensorTypeManagement />} />
            <Route path="/quanly/mapcontainer" element={<MapContainer />} />
            <Route path="/quanly/thongbao" element={<ThongBao />} />
            <Route path="/quanly/loaidulieu" element={<DatatypeManagement />} />
            <Route path="/infomation" element={<InformationPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        </div>
        {/* <Footer/> */}
    </div>
    </>

  );
}

export default App;
