"use client";

import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';
import { EditPassword, InputsCreate } from '../data/dataCreateUsers';
import Alert from './Alert';
import SimpleDate from './SimpleDate';
import icon_uv_creat from '../img/icon_uv_creat.png'

const dataUser = {
  username:'Nhân Hào',
  email:'truongnhanhao107@gmail.com',
  sdt:'0354107487',
  addressCurrent: 'Sóc Trăng'
}

const InformationPage = () => {
  const [user, setUser] = useState(dataUser);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [editPassword, setEditPassword] = useState({oldPassword: '', newPassword:'',confirmPassword:''});
  useEffect(() => {
    const getUsers = async () => {
      // const response = await publicRequest.get('/users/653ded62e995405b22717d6c');
      // setUser(response.data);

      const today = new Date();
      setCurrentDate(today);
    }
    getUsers();
  }, []);

  const handleSaveClick = async () => {
    if(isEditing && isEditingPassword){
      if (editPassword.confirmPassword === '' || editPassword.newPassword === '') {
        setAlertMessage('Mật khẩu không được để trống');
        return;
      }

      if (editPassword.confirmPassword !== editPassword.newPassword) {
        setAlertMessage('Mật khẩu không trùng khớp');
        setEditPassword({ newPassword: '', confirmPassword: '', oldPassword: '' });
        return;
      }

      try {
        const data= {userId: user._id, oldPassword: editPassword.oldPassword, newPassword: editPassword.newPassword}
        const response = await publicRequest.post(`/users/auth`, data);
        setUser(response.data);
        if(response.status===200){
        setIsEditing(false);
        setIsEditingPassword(false);
        setAlertMessage(response.data.message);
        }
      } catch (error) {
        console.error('Lỗi khi cập nhật mật khẩu', error);
      }
    }

  
    if (isEditing && !isEditingPassword) {
      try {
        const response=200;
        // const response = await publicRequest.put(`/users/${user._id}`, user);
        // setUser(response.data);
        setUser(user)
        setIsEditing(false);
        if(response===200){
          setIsEditing(false);
        setAlertMessage('Cập nhật người dùng thành công');
        }
      } catch (error) {
        console.error('Lỗi khi cập nhật thông tin:', error);
      }
    }
  }
  
  const handleChange = (e) => {
    if (e.target.type === "number") {
      setUser((prev) => {
        return { ...prev, [e.target.name]: e.target.valueAsNumber };
      });
    } else {
      setUser((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };
  const handleChangePassword = (e) => {
      setEditPassword((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
   
  };
  const handleDateChange = (date, type, id) => {
    // console.log(date)
    // if(type==='ngaysinh'){
    //   setUser((prev: any) => {
    //     return { ...prev, 'ngaysinh': date};
    //   });
    // }
  };
console.log(editPassword)
  return (
    <div className="w-full">
      {/* {user && ( */}
        <div className='max-w-2xl bg-white mx-auto rounded-lg shadow-lg mt-36'>
          <h2 className="text-2xl text-center font-semibold p-4 text-blue-600">THÔNG TIN CÁ NHÂN</h2>
         {!isEditingPassword&& <div className='mx-4 lg:mx-12'>
            {InputsCreate?.map((item, i)=> (
              <div className='flex items-center justify-between py-2 text-xl' key={i}>
                <label htmlFor={item.title} className='flex items-center font-medium text-gray-700 w-52'><img src={item.icon} alt="Background" className='w-12 mr-1'/> {item.name}:</label>
                <input
                  className="bg-gray-100 rounded-md p-3"
                  onChange={handleChange}
                  disabled={!isEditing}
                  type={item.type}
                  id={item.title}
                  name={item.title}
                  value={user ? user[item.title]: ''}
                />
              </div>
            )).slice(0, InputsCreate?.length-1)}

            <div className='flex items-center justify-between py-2 text-xl'>
            <label htmlFor={'day'} className='font-medium text-gray-700 w-52 flex items-center'><img src={icon_uv_creat} alt="Background" className='w-12 mr-1'/> Ngày sinh:</label>
            <SimpleDate selectedDate={currentDate} onChange={handleDateChange} title={''} type={'ngaysinh'} id={0}/>
            </div>
          </div>}

          
          {isEditingPassword&& <div className='mx-4 lg:mx-12'>
            {EditPassword?.map((item, i)=> (
              <div className='flex items-center justify-between py-2 text-xl' key={i}>
                <label htmlFor={item.title} className='font-medium text-gray-700 w-44'>{item.name}:</label>
                <input
                  className="bg-gray-100 rounded-md p-3"
                  onChange={handleChangePassword}
                  disabled={!isEditing}
                  placeholder={'Nhập '+item.name}
                  type={item.type}
                  id={item.title}
                  name={item.title}
                  value={editPassword ? editPassword[item.title]: ''}
                />
              </div>
            ))}
          </div>}

          <div className='w-full text-center'>
            {isEditing ? (
              <button
                className="bg-blue-500 hover-bg-blue-600 text-white font-semibold py-2 px-4 my-5 mx-3 rounded"
                onClick={handleSaveClick}
              >
                Lưu
              </button>
            ) : (
              <><button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 my-5 mx-3 rounded"
                  onClick={()=>{setIsEditing(true)}}
                >
                  Chỉnh sửa thông tin
                </button><button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 my-5 mx-3 rounded"
                  onClick={()=>{setIsEditingPassword(true); setIsEditing(true);}}
                >
                    Đổi mật khẩu
                </button></>
            )}
          </div>
        </div>
      {/* )} */}
     <Alert message={alertMessage}/>

    </div>
  );
};

export default InformationPage;
