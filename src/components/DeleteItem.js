
import React from "react";
import SimpleButton from "./SimpleButton";
import { publicRequest, publicRequestTram } from "../requestMethods";
import { useNavigate } from "react-router-dom";


const DeleteItem = ({setSelectedAll,setAlert, setClose,setSelectedItem,arrayId, selectedAll, url, title}) => {
  const history = useNavigate();

  const handleImport = async () => {
 try {
  if(selectedAll){
    const item = await publicRequestTram.delete(url, {data:[]});
      if(item.status===202){
        setAlert('Xóa tất cả dữ liệu thành công')
        setClose(false)
        setSelectedAll(false);
        setSelectedItem([])
        history(`/quanly${url}`);
       }
  }else if(arrayId?.length >0){
    const item = await publicRequestTram.delete(`${url}/`+arrayId[0]);
      if(item.status===202){
        setAlert('Xóa dữ liệu thành công')
        setSelectedAll(false);
        setClose(false)
        setSelectedItem([])
        // history(`/quanly${url}`);
        window.location.reload()
      }
  }
} catch (error) {
  setAlert('Xóa dữ liệu thất bại')
  setSelectedAll(false);
  setClose(false)
  setSelectedItem([])
  history(`/quanly/${url}`);
}
      };
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h1 className="font-bold text-lg">Xác nhận xóa {arrayId?.length=== 0? "": arrayId?.length} {selectedAll&& "Tất cả"}  {title} này</h1>
      <SimpleButton title="Xác nhận" handleClick={handleImport}/> 
    </div>
  );
};

export default DeleteItem;
