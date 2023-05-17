import React from 'react'
import { useState } from 'react'

const Weather = ({ weather, temp }) => {
  const [isCelcius, setisCelcius] = useState(true)
  console.log(weather)
  //const Temp=wather.temp
  const changeUnitTemp = () => setisCelcius(!isCelcius)
  return (
    
     <section className='text-xl'>
    <h2 className='text-center nb-4 font-bold '>{weather.sys.country} </h2>
      <h2 className='text-center nb-4 font-bold' >{weather.name}</h2>
      
      <section className='grid gap-4 sm:grid-cols-2'>
      
      <article className="bg-slate-300/70 rounded-3xl grid grid-cols-2 justify-items-center items-center py-2">
        <h3 className='capitalize col-start-1 col-end-3'>{weather.weather[0].description}</h3>

        <h3 className='text-45px'>{isCelcius ? `${temp.celcius}  °C` : `${temp.fahrenheit}°F`} </h3>
        <div>

          <img src={` https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />

        </div>


      </article>


      <article className="bg-slate-300/70 rounded-3xl grid grid-cols-3 justify-items-center items-center py-2 sm:grid-cols-1 " >
        <div className='flex text-sm justify-center items-center'>
          <div>
            <img src="/windy.png" alt="" />
          </div>
          <h5>{weather.wind.speed}m/s </h5>
        </div>

        <div className='flex text-sm justify-center items-center'>
          <div>
            <img src="/rain.png" alt="" />
          </div>
          <h5>{weather.main.humidity} % </h5>
        </div>

        <div className='flex text-sm justify-center items-center'>
          <div>
            <img src="/tabler_arrow-wave-right-down.png " alt="" />
          </div>
          <h5>{weather.main.pressure}HPA </h5>
        </div>
      </article>

      </section>
      <button onClick={changeUnitTemp} className='bg-blue-500 py-2 px-4 rounded-full  hover:bg-blue-800 duration-200 text-sm block mx-auto nt-4 text-white font-bold'>Cambiar "C/F"</button>
    </section>

  )
}

export default Weather