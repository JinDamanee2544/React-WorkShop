import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Food from './components/Food'
import MenuData from './data/MenuData'
function App() {
  const [foodData,setFoodData] = useState(MenuData);
  const [dataInPages,setDataInPages] = useState([]);
  const [pages,setPages] = useState(0);

  const pagination = () => {
    const foodPerPage = 3;
    const pages = Math.ceil(MenuData.length / foodPerPage);

    const newFood = Array.from({length:pages},(data,idx)=>{
      const start = idx * foodPerPage;
      return MenuData.slice(start,start+foodPerPage);
    })
    return newFood
  }
  const handlePage = (idx) => {
    setPages(idx)
  }

  useEffect(()=>{
    const paginate = pagination();
    setDataInPages(paginate)
    setFoodData(paginate[pages])
  },[pages]);

  return (
    <div className='App p-16 bg-[#121312] h-screen flex flex-col justify-center'>
      <h1 className='text-center text-white font-bold text-4xl m-2'>Food Card | Pagination</h1>
      <div className='container flex flex-wrap justify-center items-center'>
      {
        foodData.map((food,idx)=>{
          return <Food key={idx} {...food}/>
        })
      }
      </div>
      <div className='pagination-container flex justify-center flex-wrap mt-[40px]'>
        {dataInPages.map((data,idx)=>{
          return <button 
          className={`page-btn ${idx===pages?'active-btn':null}`} 
          key={idx} 
          onClick={()=>handlePage(idx)}
          >{idx+1}</button>
        })}
      </div>
    </div>
  )
}

export default App
