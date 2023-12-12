"use client"

import { useState } from 'react';
import { userRequest } from '../requestMethods';
// import Alert from './Alert';
import { useNavigate,useLocation } from 'react-router-dom';


const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const history = useNavigate();
  const location = useLocation();
  const id = location.pathname.split('/')[1];
console.log(id)
const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (forgotPassword) {
      // Xử lý yêu cầu đặt lại mật khẩu
    } else {
      try {
        // const response = await userRequest.post('/login', {
        //   username: username,
        //   password: password
        // });
        const response=200;
        if (response === 200) {
          setAlertMessage('Đăng nhập thành công');
          // const userData  = {name: response.data.username, email: response.data.email}
          localStorage.setItem('user', JSON.stringify(username, password));
          history('/quanly/tongquan');
        }
      } catch (error) {
        setAlertMessage('Lỗi trong quá trình đăng nhập hoặc lấy sản phẩm');
      }
    }
  };
  return (
      <div className="bg-gray-200 m-auto p-8 rounded-lg shadow-md w-full h-1/3 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {forgotPassword ? 'Quên mật khẩu' : 'HỆ THỐNG QUAN TRẮC'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-600 font-medium mb-1">
              Tên tài khoản
            </label>
            <input
              type="text"
              id="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          {forgotPassword ? null : (
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 font-medium mb-1">
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {forgotPassword ? 'Gửi yêu cầu đặt lại mật khẩu' : 'Đăng nhập'}
          </button>
        </form>
        <button
          onClick={() => setForgotPassword(!forgotPassword)}
          className="block text-blue-500 text-center font-medium mt-2 hover:underline"
        >
          {forgotPassword ? 'Đăng nhập' : 'Quên mật khẩu?'}
        </button>
    
    </div>
  );
};

export default Login;
