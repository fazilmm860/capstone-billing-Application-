import React,{useState,useEffect} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Col, Row } from 'antd';
import ItemList from '../components/ItemList';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const Homepage = () => {
  //useState
  const [items,setItemsData]=useState([])
  const[selectedCategory,setSelectedCategory]=useState('drinks')
  const categories=[
    {
      name:'drinks',
      imageUrl:'https://cdn-icons-png.flaticon.com/512/437/437036.png'

    },
    {
      name:'rice',
      imageUrl:'https://cdn-icons-png.flaticon.com/512/3174/3174880.png'


    },
    {
      name:'noodles',
      imageUrl:'https://cdn-icons-png.flaticon.com/512/1471/1471262.png'
    },
    {
      name:'burger',
      imageUrl:'https://cdn-icons-png.flaticon.com/512/198/198416.png'
    },
    {
      name:'sandwich',
      imageUrl:'https://cdn-icons-png.flaticon.com/512/184/184514.png'
    },
    {
      name:'pizza',
      imageUrl:'https://cdn-icons-png.flaticon.com/512/2094/2094661.png'
    },
    {
      name:'wrap',
      imageUrl:'https://cdn-icons-png.flaticon.com/512/2619/2619574.png'
    },
    {
      name:'hot Beverages',
      imageUrl:'https://cdn-icons-png.flaticon.com/512/1028/1028377.png'
    },
    
  ]
  const dispatch=useDispatch(); 

  //useEffect
  useEffect(()=>{
    const getAllItems= async ()=>{
    try{
      dispatch({
        type:'SHOW_LOADING'
      })
      const url='https://hotel-billing-6sgh.onrender.com'
      const {data}=await axios.get(`${url}/api/items/get-item`);
    setItemsData(data);
    dispatch({
      type:'HIDE_LOADING'
    })
    }
    catch(err){
     console.log(err);
    }
   };
   getAllItems();
   } ,[dispatch]);
  
  console.log(items);
  return (
    <DefaultLayout>
      <div className='d-flex'>
        {categories.map(category=>(
          <div  key={category.name}className={`d-flex category ${selectedCategory === "category-active"}`}
          onClick={()=> setSelectedCategory(category.name)}
          >
              <h4>{category.name}</h4>
              <img src={category.imageUrl} alt={category.name}  height='40' width='60'/>
          </div>
        ))}
      </div>
     <Row>
      {
       items
       .filter((i)=>i.category===selectedCategory)
       .map((item) =>(
        <Col xs={24} lg={6} md={12} sm={6}> 
        <ItemList key={item.id} item={item}/>
        </Col>
       ))
      }
     </Row>
    </DefaultLayout>
  )
}

export default Homepage
  