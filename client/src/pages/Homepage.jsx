import React,{useState,useEffect} from 'react'
import DefaultLayout from '../components/DefaultLayout'

import { getItems } from '../apis/items'

const Homepage = () => {
  //useState
  const [items,setItemsData]=useState([])
  //useEffect
  useEffect(()=>{
    getItems().then(items=>setItemsData(items))
  },[]);
  console.log(items);
  return (
    <DefaultLayout>
      <h1>Home-Page</h1>
    </DefaultLayout>
  )
}

export default Homepage
