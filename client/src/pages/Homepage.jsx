import React,{useState,useEffect} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Col, Row } from 'antd';
import ItemList from '../components/ItemList';
import axios from 'axios';

const Homepage = () => {
  //useState
  const [items,setItemsData]=useState([])
  //useEffect
  useEffect(()=>{
    const getAllItems= async ()=>{
    try{
      const url='http://localhost:3001'
      const {data}=await axios.get(`${url}/api/items/get-item`);
    setItemsData(data);
    }
    catch(err){
     console.log(err);
    }
   };
   getAllItems();
   } ,[]);
  
  console.log(items);
  return (
    <DefaultLayout>
     <Row>
      {
       items.map((item) =>(
        <Col xs={24} lg={6} md={12} sm={6}> 
        <ItemList item={item}/>
        </Col>
       ))
      }
     </Row>
    </DefaultLayout>
  )
}

export default Homepage
