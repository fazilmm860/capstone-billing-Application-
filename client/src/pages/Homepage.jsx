import React,{useState,useEffect} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Axios } from 'axios'

const Homepage = () => {
  //useState
  const [itemsData,setItemsData]=useState([])
  //useEffect
  useEffect(()=>{
    const getAllItems=async()=>{
          try{
            const [data]=await Axios.get('/api/items/get-item')
      }
      catch(error){
        console.log(error);
      }
    }
    getAllItems()
  })
  return (
    <DefaultLayout>
      <h1>Home-Page</h1>
    </DefaultLayout>
  )
}

export default Homepage
