import icon_email from '../img/icon_email.png'
import icon_phone from '../img/icon_phone.png'
import icon_address from '../img/icon_address.png'
import icon_b1 from '../img/bg_b1.png'
export const InputStart = { 
  username: "",
  email: "",
  sdt: 0,
  password: "",
  addressCurrent: "",
  isAdmin: false,
}

export const InputsCreate = [
  {
    title: "username",
    name: "Tên người dùng",
    type: "string",
    icon: icon_b1

  },
  {
    title: "email",
    name: "Email",
    type: "string",
    icon: icon_email


  },
  {
    title: "sdt",
    name:"Điện thoại",
    type: "number",
    icon: icon_phone

  },
 {
    title: "addressCurrent",
    name: "Địa chỉ hiện tại",
    type: "string",
   icon: icon_address
  },
  {
    title: "password",
    name: "Mật khẩu",
    type: "password"
  },
];
export const EditPassword = [
  {
    title: "oldPassword",
    name: "Mật khẩu cũ",
    type: "string"
  },
  {
    title: "newPassword",
    name: "Mật khẩu mới",
    type: "password"

  },
  {
    title: "confirmPassword",
    name:"Xác nhận Mật khẩu",
    type: "password"

  },]

export const columnUser = [{name:'username', value:'Khách hàng'},{name:'email', value:'Email'}, {name: 'sdt', value: 'số Điện thoại'},{name:'addressCurrent',value:'Địa chỉ hiện tại'}, {name: 'dh', value: 'Đơn hàng'},{name:'ct',value:'Tổng chỉ tiêu'}]
export const columnUpdate= ['Khách Hàng', 'Email', 'Số điện thoại','Địa chỉ','Số đơn hàng', 'Tổng chi tiêu']

