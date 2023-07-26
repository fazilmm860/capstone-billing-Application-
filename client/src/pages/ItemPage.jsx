import React, {useEffect,useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'
import { Button, Form, Input, Modal, Select, Table, message } from 'antd'


const ItemPage = () => {
  const [items,setItemsData]=useState([])
  const[popupModal,setPopupModal]=useState(false)
  const[ editItem, setEditItem]=useState(null)

  const dispatch=useDispatch();

  const getAllItems= async ()=>{
    try{
      dispatch({
        type:'SHOW_LOADING'
      })
      const url='http://localhost:3001'
      const {data}=await axios.get(`${url}/api/items/get-item`);
    setItemsData(data);
    dispatch({
      type:'HIDE_LOADING'
    })
    console.log(data);
    }
    catch(err){
     console.log(err);
    }
   };

    //useEffect
    useEffect(()=>{
      
     getAllItems();
     } ,[]);

     // handle Delete item
     const handleDelete=async(record)=>{
      try{
        dispatch({
          type:'SHOW_LOADING'
        })
        const url='https://hotel-billing-6sgh.onrender.com'
        await axios.post(`${url}/api/items/delete-item`,{itemId:record._id});
        message.success("Item Deleted Successsfully")
        getAllItems();
        setPopupModal(false)
      dispatch({
        type:'HIDE_LOADING'
      })
      }
      catch(err){
        dispatch({
          type:'HIDE_LOADING'
        })
        message.error("Something Went Wrong")
       console.log(err);
      }
     };
     

     //Table Data
     const columns=[
      {title:'Name',dataIndex:'name'},
      {title:'Image',dataIndex:'image',
      render:(image,record)=><img src={image} alt={record.name} height='60' width='60'/>},
      {title:'Price',dataIndex:'price'},
      {title:'Actions',dataIndex:'_id',render:(id,record)=><div>
        
        <EditOutlined
         style={{cursor:'pointer'}}
         onClick={()=>{
          setEditItem(record)
          setPopupModal(true)
         }}
          />
        <DeleteOutlined
         style={{cursor:'pointer'}}
         onClick={()=>{
          handleDelete(record)
         }}
          /> 
      </div>
      }
  ]
// handle form Submit
 const handleSubmit= async (value)=>{
  if(editItem===null){
    try{
      dispatch({
        type:'SHOW_LOADING'
      })
      const url='http://localhost:3001'
      const res=await axios.post(`${url}/api/items/add-item`,value);
      message.success("Item Added Successsfully")
      getAllItems();
      setPopupModal(false)
    dispatch({
      type:'HIDE_LOADING'
    })
    }
    catch(err){
      message.error("Something Went Wrong")
     console.log(err);
    }
  }else{
    try{
      dispatch({
        type:'SHOW_LOADING'
      })
      const url='http://localhost:3001'
      await axios.put(`${url}/api/items/edit-item`,{...value, itemId:editItem._id});
      message.success("Item Updated Successsfully")
      getAllItems();
      setPopupModal(false)
    dispatch({
      type:'HIDE_LOADING'
    })
    }
    catch(err){
      dispatch({
        type:'HIDE_LOADING'
      })
      message.error("Something Went Wrong")
     console.log(err);
    }
  }
 
 }

 

  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
      <h1>Item - list</h1>
      <Button type='primary' onClick={()=> setPopupModal(true)}>Add Item</Button>
      </div>
      <Table columns={columns} dataSource={items} bordered/>

    {
      popupModal && (
        <Modal 
        title={`${editItem !== null ? 'Edit Item' : 'Add New Item'}`}
        open={popupModal}  
        onCancel={()=> {
          setEditItem(null);
          setPopupModal(false)}}
        footer={false}
        >
         <Form
              layout="vertical"
              initialValues={editItem}
              onFinish={handleSubmit}
            >
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>
              <Form.Item name="price" label="Price">
                <Input />
              </Form.Item>
              <Form.Item name="image" label="Image URL">
                <Input />
              </Form.Item>
              <Form.Item name="category" label="Category">
                <Select>
                  <Select.Option value="drinks">Drinks</Select.Option>
                  <Select.Option value="rice">Rice</Select.Option>
                  <Select.Option value="noodles">Noodles</Select.Option>
                  <Select.Option value="burger">Burger</Select.Option>
                  <Select.Option value="pizza">Pizza</Select.Option>
                  <Select.Option value="sandwich">Sandwich</Select.Option>
                  <Select.Option value="wrap">Wraps</Select.Option>
                  <Select.Option value="hot Beverages">Hot Beverages</Select.Option>
                </Select>
              </Form.Item>
              <div className="d-flex justify-content-end">
                <Button type="primary" htmlType='submit'>SAVE</Button>
  
              </div>
              </Form>
        </Modal>
      )
    }
     
    </DefaultLayout>
  )
}

export default ItemPage
