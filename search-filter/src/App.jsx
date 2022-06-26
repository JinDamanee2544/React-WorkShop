import { useState ,useEffect } from 'react'
import './App.css'
function App() {
  const [countries,setCountries] = useState([])
  const [word,setWord] = useState("")
  const [dataFilter] = useState(["name","capital"])

 useEffect(()=>{
  fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>{
      setCountries(data)
    })
 },[])

 const searchCountry=(countries)=>{
  return countries.filter((country)=>{
    return dataFilter.some((filter)=>{
      if(country[filter]){
        return country[filter].toString().toLowerCase().indexOf(word.toLowerCase())>-1;
      }
    })
  })
 }
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <div className='w-[96%] mw-[140px] my-0 mx-auto'>
      <div className='m-12'>
        <label htmlFor="search-form">
          <input 
            value={word} 
            onChange={(e)=>setWord(e.target.value)}  
            type="text" 
            placeholder='Search ... ( Country , Capital )' 
            className='p-[1.4em] w-[96%] text-[18px] shadow-xl'/>
        </label>
      </div>
      <ul className='my-[2em] mx-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[48px]'>
        {searchCountry(countries).map((item,idx)=>{
          return (
              <li key={idx}> 
                <div className='shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
                  <div className='max-h-[100px]'>
                    <img src={item.flag} alt={item.name} className='w-full object-cover min-h-full object-center'/>
                  </div>
                  <div className='py-8 px-4 bg-white'>
                    <div className='mt-4'>
                      <h2 className='text-xl font-bold'>{item.name}</h2>
                      <ol className=''>
                        <li className='mt-2'> Population : <span className='text-gray-500'>{formatNumber(item.population)}</span> </li>
                        <li className='mt-2'> Region : <span className='text-gray-500'>{item.region}</span></li>
                        <li className='mt-2'> Capital :<span className='text-gray-500'> {item.capital}</span></li>
                      </ol>
                    </div>
                  </div>
                </div>
              </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
