// import Link from 'next/link';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(-1);
  // eslint-disable-next-line no-restricted-globals
  const currentURL = location.pathname;
  // const menuItems = [
  //   {
  //     title: 'TỔNG QUAN',
  //     url: '/quanly/tongquan',
  //     icon: '🏡',
  //   },
  //   {
  //     title: 'Đối tượng quan trắc',
  //     url: '/quanly/vungcanhtac',
  //     icon: '🌾',
  //   },
  //   {
  //     title: 'TRẠM CẢM BIẾN',
  //     url: '/quanly/tramcambien',
  //     icon: '🚉',
  //   },
  //   {
  //     title: 'THIẾT BỊ CẢM BIẾN',
  //     url: '/quanly/thietbicambien',
  //     icon: '🖥️',
  //   },
  //   {
  //     title: 'DỮ LIỆU CẢM BIẾN',
  //     url: '/quanly/dulieucambien',
  //     icon: '📊',
  //   },
  //   {
  //     title: 'LOẠI DỮ LIỆU',
  //     url: '/quanly/loaidulieu',
  //     icon: '📄',
  //   },
  //   {
  //     title: 'ĐIỀU KHIỂN',
  //     url: '/quanly/dieukhien',
  //     icon: '🕹️',
  //   },
  //   {
  //     title: 'CẤU HÌNH TRẠM',
  //     url: '/quanly/cauhinhtram',
  //     icon: '🛠️',
  //   },
  //   {
  //     title: 'BẢN ĐỒ',
  //     url: '/quanly/mapcontainer',
  //     icon: '🗺️',
  //   },
  //   {
  //     title: 'PHÂN TÍCH BÁO CÁO',
  //     // url: '/quanly/report',
  //     url: '',
  //     icon: '📈',
  //     menu:[
  //       { name: 'So Sánh và Đánh Giá', href: '/' },
  //       { name: 'Nhận Định Và Dự Báo', href: '/' },
  //       { name: 'Báo Cáo Kết Quả', href: '/' },
  //       ]
  //   },
  // ];

  const menuItems = [
    {
      title: 'TỔNG QUAN',
      url: '/quanly/tongquan',
      icon: '🏡',
    },
    {
      title: 'Đối tượng quan trắc',
      url: '/quanly/things',
      icon: '🌾',
    },
    {
      title: 'TRẠM CẢM BIẾN',
      url: '/quanly/stations',
      icon: '🚉',
    },
    {
      title: 'THIẾT BỊ CẢM BIẾN',
      url: '/quanly/sensors',
      icon: '🖥️',
    },
    {
      title: 'DỮ LIỆU CẢM BIẾN',
      url: '/quanly/dulieucambien',
      icon: '📊',
    },
    {
      title: 'LOẠI DỮ LIỆU',
      url: '/quanly/loaidulieu',
      icon: '📄',
    },
    {
      title: 'ĐIỀU KHIỂN',
      url: '/quanly/dieukhien',
      icon: '🕹️',
    },
    {
      title: 'CẤU HÌNH TRẠM',
      url: '/quanly/multi-data-streams',
      icon: '🛠️',
    },
    {
      title: 'BẢN ĐỒ',
      url: '/quanly/mapcontainer',
      icon: '🗺️',
    },
    {
      title: 'PHÂN TÍCH BÁO CÁO',
      // url: '/quanly/report',
      url: '',
      icon: '📈',
      menu:[
        { name: 'So Sánh và Đánh Giá', href: '/' },
        { name: 'Nhận Định Và Dự Báo', href: '/' },
        { name: 'Báo Cáo Kết Quả', href: '/' },
        ]
    },
  ];

  return (
    <>
    <div className="w-80 bg-gray-800 hidden lg:block mt-20 min-h-screen">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}  onClick={()=>{if(showMenu===index){setShowMenu(-1)}else{setShowMenu(index)}}}>
            <a
              href={item.url!==''&&item.url}
              className={`text-white flex items-center font-medium text-lg p-4 w-full border-b-2 border-gray-700 hover:bg-gray-500 ${currentURL.includes(item.url) && item.url!==''?'bg-gray-500 ' : ''}`}
            >
              <span className='text-xl'>{item.icon}</span>
            <span className='px-2'>{item.title}</span>  
            </a>
            {item.menu && item.menu.length > 0 && (
            <ul
            className={`pl-6 space-y-2 overflow-hidden transition-opacity ${
              showMenu === index
                ? 'opacity-100 max-h-96 duration-300 ease-in'
                : 'opacity-0 max-h-0 duration-200 ease-out'
            }`}
          >
            {showMenu === index &&
              item.menu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a
                    href={subItem.href}
                    className="text-white block text-lg p-2 hover:underline"
                  >
                    {subItem.name}
                  </a>
                </li>
              ))}
          </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
    <div className="w-32 left-0 bg-gray-800 lg:hidden mt-20">
  <ul className="space-y-2">
    {menuItems.map((item, index) => (
      <li key={index} onClick={() => {if (showMenu === index) {setShowMenu(-1)} else {setShowMenu(index) }}}>
        <a
          href={item.url !== '' && item.url}
          className={`block py-4 w-full text-center border-b-2 border-gray-700 hover:bg-gray-700 ${currentURL.includes(item.url) && item.url!==''?'bg-gray-500 ' : ''}`}
        >
          <span className="lg:hidden text-2xl text-white">{item.icon}</span>
          {item.menu && item.menu.length > 0 && (
            <ul className="text-white space-y-2 flex flex-col">
              {showMenu === index && item.menu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a
                    href={subItem.href}
                    className="block p-1 text-left text-md hover:underline"
                  >
                    {subItem.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </a>
      </li>
    ))}
  </ul>
</div>


  </>
  );
};

export default Sidebar;
