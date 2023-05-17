import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './componets/Weather'
import Loader from './componets/Loader'

function App() {
  const [weather, setWeather] = useState()
  const [coords, setCoords] = useState()
  const [temp, settemp] = useState()
  const event = (pos) => {
    console.log(pos)
    const currentCoords = {
      lat: pos.coords.latitude,
      longt: pos.coords.longitude
    }
    setCoords(currentCoords)
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(event)
  }, [])
  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.longt}&appid=87b3890c51e780604422b8ff2c22741c`
      axios
        .get(URL)
        .then((res) => {setWeather(res.data)
        const celcius= (res.data.main.temp - 267.15).toFixed(1)
        const fahrenheit=(celcius*(9/5)+32).toFixed(1)
        const ntemp= {
        celcius,fahrenheit
        }
        console.log(ntemp)
        settemp(ntemp)
        })
        .catch((error) => console.log(error))
    }

  }, [coords])


  return (
    <div className=" grid place-content-center min-h-screen bg-[url('/clima.jpeg')]  bg-repeat-round px-2 w-[100%]">
      {
        weather ? (

          <Weather weather={weather} temp ={temp} />
        ) :
          (
            <Loader />
          )
      }
    </div>
  )
}

export default App
