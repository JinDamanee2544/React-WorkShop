import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const name = 'Bangkok'
  const apiKey = '69cb359060081eba3b15d324202a7cbe'
  const [city,setCity] = useState({})
  const [isLoading,setIsLoading] = useState(false);
  const [temp,setTemp] = useState({now:0,max:0,min:0})

  useEffect(()=>{
    const fetchData = async() => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
      const res = await fetch(url);
      const data = await res.json();
      setCity(data);
      setTemp({
        now:data.main.temp,
        max:data.main.temp_max,
        min:data.main.temp_min,
      })
      setIsLoading(true)
    }
    fetchData();
  },[]);

  const convertTemp=(k)=>{
    return (k-273).toFixed();
  }

  return (
  (
      isLoading && <div className="App w-screen h-screen m-0 text-center text-[#515151] bg-[linear-gradient(45deg,#185aad,#43c2a2)] flex flex-col items-center justify-center">
      <section>
        <div className="location text-white">
          <h1 className="city m-0 text-[2em] text-bold">{city.name}</h1>
          <p className="state mt-0 mb-4">{city.sys.country}</p>
        </div>
        <div className="card w-[500px] shadow-xl">
            <div className="weather flex flex-col justify-center text-white bg-orange-500 h-[10vh] py-20 px-0 rounded-t-lg">
              <h1 className='m-0 text-7xl'>{convertTemp(city.main.temp)}&deg;C</h1>
              <small className='text-base mt-2'>MAX : {convertTemp(city.main.temp_max)}&deg;C MIN : {convertTemp(city.main.temp_max)}&deg;C</small>
            </div>
            <div className="info flex bg-white justify-around p-5">
              <div className="status">{city.weather[0].main}</div>
              <div className="humidity">Humidity : {city.main.humidity}</div>
              <div className="wind">Wind : {city.wind.speed}</div>
            </div>
        </div>
      </section>
    </div>
  )
  )
}

export default App
