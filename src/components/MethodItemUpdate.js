"use client" 

import React, { useEffect, useState  } from "react";
import SimpleButton from "./SimpleButton";
import { publicRequest, publicRequestTram } from "../requestMethods";
import { useNavigate } from "react-router-dom";
const MethodItemUpdate  = ({setAlert, setClose,setSelectedItems,InputStart, isOpen,InputsCreate, url, title, action,data} ) => {
const [inputs, setInputs] = useState(null);
const [node, setNode] = useState(null);
const history = useNavigate();


// console.log(InputStart, InputsCreate)
useEffect(()=> {
      if(InputStart.length>0 && isOpen && action==='update'){
      const getItem = async()=> {
        if(url==='/things'){
          const res = data.filter((item)=> item.thingId===InputStart[0]);
          setInputs(res[0])
        }else if(url==='/multi-data-streams'){
        const res = await publicRequestTram.get(`${url}/${InputStart[0]}`);
         if(res.status===200){
           setInputs(res.data)
           setNode(JSON.stringify(res.data.configuration));
           
          }
        }
        else {
          const res = data.filter((item)=> item.id===InputStart[0]);
          setInputs(res[0])
        }
        }
        getItem()
      }
    },[InputStart, action, data, isOpen, url])
    

  const handleChange = (e) => {
    if (e.target.type === "number") {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.valueAsNumber };
      });
    } else {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };
  
  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (inputs) {
           let res;
          //  if(url==='/things'){
          //   res = await publicRequestTram.patch(`${url}/${inputs.thingId}/location/${inputs.locationId}`) 
          //  }
          //  else
            if(url==='/multi-data-streams'){
              const { thingId, sensorId,...rest } = inputs;
              // const jsonString = `{${node}}`;
              rest.configuration= JSON.parse(node);
              console.log(rest)
              res= await publicRequestTram.patch(url+`/${InputStart[0]}/configure`, rest); 
              console.log(res)
           }
           else {
             res = await publicRequestTram.patch(`${url}/${InputStart[0]}`, inputs) 
            } 
            if([201,200].includes(res.status)){
              setAlert('Cập nhật dữ liệu thành công')
              setSelectedItems([])
              setClose(false)
              history(`/quanly${url}`);
              //  router.push('/admin/users');
             }
            }
    } catch (error) {
        setAlert(error.message)
        setSelectedItems([])
        setClose(false)
    }
  };
  const handleChangeNode =(e)=> {
    setNode(e.target.value)
    // console.log(JSON.parse(e.target.value))
    // console.log(JSON.parse('{'+(e.target.value)+'}'))
  }
  console.log(inputs)
    return (
        <div className="my-4 overflow-y-scroll">
   
         <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 w-80">{title}</h2>
      <form>        
        {InputsCreate&& inputs!==null &&
          InputsCreate?.map((item, i)=> (
          <div className="mb-4" key={i}>
          <label htmlFor={item.title} className="block text-sm font-medium text-gray-700">            
            {item.name}
          </label>
          <input
             onChange={handleChange}
            type={item.type}
            id={item.title}
            name={item.title}
            className="mt-1 p-2 w-full border rounded-md"
            required
            autoComplete="off"
            value={inputs ? inputs[item.title]: ''}
          />
        </div>))
        }
            { url==='/multi-data-streams'&&    <div className="mb-4">
          <label htmlFor="orderNotes" className="block text-lg text-gray-800 mb-1">
            Cấu hình trạm quan trắc(tùy chọn)
          </label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            placeholder="Viết cấu hình theo dạng chuỗi"
           className="h-40 p-3 w-full border text-xl font-medium  rounded mb-4 focus:shadow-lg focus:shadow-gray-500/50"
           value={node? node: ''} 
           onChange={handleChangeNode}
          />
        </div>}
        <br/>
      <SimpleButton title={title} handleClick={handleClick}/>

      </form>
    </div>
</div>
);  
  };
export default MethodItemUpdate;