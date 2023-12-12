import { useState, useEffect, useContext } from 'react';
import { publicRequest } from '../requestMethods';
import Bg_b1 from '../img/bg_b1.png'
import logo from '../img/logo.png'
import ut6 from '../img/ut6.png'
import icon_email from '../img/icon_email.png'
import nha_td from '../img/nha_td.png'
import cd from '../img/cd.png'
import { localStorageService } from '../utils/localStorageService';
import { thongBaoTram, tinNhanDaGui } from '../data/dataThongBao';
// import { useNavigate } from "react-router-dom";

const Notification = () => {
  const [user, setUser] = useState(null);
  const [showNotification, setShowNotification] = useState(-1);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(-1);

  const menuItems = [
    {
      title: 'Tắt thông báo trạm',
      icon: '📌',
      type:'checkbox',
       menu:[
      { name: 'HG1-Tháp Mười' },
      { name: 'HG2-Lương Nghĩa' },
      { name: 'ST1-Trần Đề' },
      ]
    },
    {
      title: 'Chọn trạm mặc định',
      icon: '📌',
      type:'radio',
      menu:[
        { name: 'HG1-Tháp Mười'},
        { name: 'HG2-Lương Nghĩa' },
        { name: 'ST1-Trần Đề' },
        ]
    },]


    
    

    
  // const navigate = useNavigate();
   
  // const pathname = useNavigate();
  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     const parsedUser = JSON.parse(storedUser);
  //     setUser(parsedUser);
  //   }
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     const response = await publicRequest.post('/logout',{
  //       credentials: 'include',
  //     });
  
  //     if (response.status === 200) {
  //       localStorage.removeItem('user');
  //       setUser(null);
  //     }
  //   } catch (error) {
  //     console.error('Lỗi đăng xuất:', error);
  //   }

  // };

  return (
    <div className='fixed w-full'>
    
     <div className=' text-white h-20 flex items-center justify-between bg-gray-900'>
       <div className="flex items-center cursor-pointer px-1">
        <a href="/">
         <img src={logo} alt="Description" className='w-24 h-16 lg:h-20 lg:py-1'/>
        </a>
        <p className='text-2xl hover:underline font-bold px-2'>Quan Trắc</p>

      </div>
      
      <div className="flex items-center cursor-pointer ">
      <div className={`p-2 relative group `}>
        <div onClick={()=>{if(showNotification===0){setShowNotification(-1)}else{setShowNotification(0)}}}>
        <span className="absolute top-2 right-3 bg-red-500 group-hover:bg-red-700 text-white text-xs rounded-full px-2 py-1">
          5
        </span>
        {/* <p className='text-2xl'>🔔</p> */}
         <img src={ut6} alt="Description" className='w-14'/>

        {showNotification===0&& <hr/>}
        </div>
       {showNotification===0&& <div className="w-60 z-10  absolute top-18 left-1/2 -translate-x-1/2   text-lg text-white bg-gray-700 shadow-lg rounded-md ">
        <div className="p-2 border-b px-1">
          <p className="text-xl font-bold">Thông Báo</p>
        </div>
        <ul className="space-y-2 py-2 px-1 max-h-60 overflow-y-auto font-medium  scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-indigo-500 scrollbar-track-indigo-100">
        {thongBaoTram.map(thongBao => (
        <li key={thongBao.id} className='leading-5 p-1 text-gray-300 border-b border-gray-500'>{thongBao.message}Tại {thongBao.station}</li>
      ))}
        </ul>
        <div className="p-2">
          <a href='/quanly/thongbao'>
          <p className="block text-blue-500 hover:underline text-center">Xem tất cả</p>
          </a>
        </div>
      </div>}

      </div>
      <div className={`p-2 relative group`}>
        <div onClick={()=>{if(showNotification===1){setShowNotification(-1)}else{setShowNotification(1)}}}>

        <span className="absolute top-2 right-3 bg-red-500 group-hover:bg-red-700 text-white text-xs rounded-full px-2 py-1">
          2
        </span>
        <img src={icon_email} alt="Description" className='w-14'/>

        {/* <p className='text-2xl'>📩</p> */}
        {showNotification===1&& <hr/>}

        </div>

        {showNotification===1 &&<div className="w-60 z-10 absolute top-18 left-1/2 -translate-x-1/2 text-lg text-white bg-gray-700 shadow-lg rounded-md">
        <div className="p-2 border-b px-1 ">
          <p className="text-xl font-bold">Tin Nhắn</p>
        </div>
        <ul className="space-y-2 py-2 px-1 max-h-60 overflow-y-auto font-medium ">
        {tinNhanDaGui.map(thongBao => (
        <li key={thongBao.id} className='leading-5 p-1 text-gray-300 border-b border-gray-500'>{thongBao.message} Vào số {thongBao.phoneNumber}</li>
      ))}
        
        </ul>
        <div className="p-2">
          <p className="block text-blue-500 hover:underline text-center">Xem tất cả</p>
        </div>
      </div>}

      </div>


        <div className="relative group">
         <div onClick={()=>{if(showNotification===2){setShowNotification(-1)}else{setShowNotification(2)}}}
          className='flex items-center rounded-l-full mx-1 bg-gray-500 rounded-r-full hover:bg-gray-600 transition-all duration-300 ease-in-out'>
         <p className=' border rounded-full w-14 '>
          {/* 👤 */}
         <img src={Bg_b1} alt="Description" />
         
         </p>
         <p className='text-lg pl-1 pr-2'>Nhân Hào
        {showNotification===2&& <hr/>}
         </p>
         </div>
      </div>
     {showNotification===2&& <div className="w-60 z-10 absolute top-16 right-1 bg-gray-700 shadow-lg rounded-md text-white">
  <div className="flex items-center p-3">
    <div className="w-20">
      <img src={nha_td} alt="Description" />
    </div>
    <div>
      <p className="text-lg font-semibold">Nhân Hào</p>
      <p className="text-sm">Hồ sơ của bạn</p>
    </div>
  </div>
        <div className="px-3 pb-3">
      <a href="/admin/information">
          <div onClick={()=> {setShowNotification(-1)}}>
          <a href='/infomation'>
            <p className='p-2 hover:bg-gray-600 cursor-pointer'>
              Thông tin cá nhân
            </p> </a> 
          </div>
      </a>
      <div>
            <p className='p-2 hover:bg-gray-600 cursor-pointer'>Phiên Bản và Chính Sách</p>
          </div>
          <div>
            <p className='p-2 hover:bg-gray-600 cursor-pointer' onClick={()=>localStorageService.deleteItem('user')}>Đăng xuất</p>
          </div>
        </div>
      </div>}
     
     <div onClick={()=> setIsOpenSidebar(!isOpenSidebar)}
     className='px-2 hover:bg-gray-700 bg-gray-800 h-20 flex items-center ml-0.5'>
      <img src={cd} alt="Description" className='w-9'
      style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(5968%) hue-rotate(0deg) brightness(88%) contrast(88%)' }}  
      />
      </div>
      </div>
     </div>

     <div
        className={`fixed top-20 right-0 h-full w-54 lg:w-72  bg-gray-800 text-white overflow-hidden transition-transform transform ${
          isOpenSidebar ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 100 }}
      >
        {/* Nội dung sidebar */}
        <h3 className='p-2 text-center text-xl bg-gray-700 text-gray-400'>TÙY CHỌN HỆ THỐNG</h3>
        <hr/>
        <ul className="space-y-2 my-2">
        {menuItems.map((item, index) => (
          <div>

          <li key={index}  onClick={()=>{if(showMenu===index){setShowMenu(-1)}else{setShowMenu(index)}}}>
            <div
              className={`text-white flex items-center font-medium text-xl p-4 w-full border-b-2 border-gray-700 hover:bg-gray-500 hover:cursor-pointer ${showMenu === index? 'bg-gray-700':''}`}
              >
              <span>{item.icon}</span>
            <span className='px-2'>{item.title}</span>  
            </div>
          </li>
            {item.menu && item.menu.length > 0 && (
              <ul
              className={`pl-6 space-y-2 overflow-hidden transition-opacity ${
              showMenu === index
                ? 'opacity-100 max-h-96 duration-300 ease-in bg-gray-700'
                : 'opacity-0 max-h-0 duration-200 ease-out'
            }`}
          >
            {showMenu === index &&
            item.menu.map((subItem, subIndex) => (
              <li key={subIndex}>
              <label className="text-white flex items-center text-md p-2 hover:underline cursor-pointer lg:text-lg">
                <input
                  type={item.type}
                  className="mr-2 cursor-pointer"
                  checked={localStorageService.getItem('trammd')===subItem.name? true:false}
                  onChange={() => { localStorageService.setItem('trammd', subItem.name);
                  window.location.reload();
                  }}
                />
                {subItem.name}
              </label>
            </li>
            
            ))}
          </ul>
            )}
          </div>

        ))}
      </ul>
      <hr/>
      <h3 className='p-2 text-center text-xl bg-gray-700 text-gray-400'>DANH SÁCH BẠN</h3>
        <hr/>
        <h3 className='p-2 text-center text-xl bg-gray-700 text-gray-400'>DANH SÁCH NHÓM</h3>
        <hr/>
      </div>
      

    </div>
  );
};

export default Notification;
