import React, { useEffect, useState } from 'react'
import "./Style.css/Home.css"
import axios from "axios"

const Home = () => {
    const [name, setname] = useState("")
    const [data,setData] =  useState({
         celcius:10,name:London,
         humidity:10,speed:2,image:""})
          
         useEffect(()=>{
            const apiUrl = "http://api.openweathermap.org/data/2.5/weather"
            axios.get(apiUrl)
            .then(res =>{
                setData({...data,celcius:res.data.main.temp, naem: res.data.name, 
                    humidity: res.data.main.humidity,speed:res.wind.speed})
            })
            .catch(err => console.log(err))
         },[])

         const handleClic =() =>{
            if(name !==""){
                const apiUrl = ""
                axios.get(apiUrl)
                .then(res =>{
                    let imagePath = "";
                    console.log(res.data)
                    setData({...data,celcius:res.data.main.temp, naem: res.data.name, 
                        humidity: res.data.main.humidity,speed:res.wind.speed})
                })
                .catch(err => console.log(err))


            }
         }

  return (
        <div className='container'>
            <div className='weather'>
                <div className='search'>
                    <input type='text' placeholder='Enter City Name' onChange={event=>setname(event.target.value)}/>
                    <button><i class="fa-solid fa-magnifying-glass" onClick={handleClic}></i> </button>
                </div>
                <div className='winfo'>
                    <img style={{width:"100%"}} src='https://logodix.com/logo/448455.png'/>
                    <h1> { Math.round(data.celcius)}22°C</h1>
                    <h2>{data.name}London</h2>
                 
                    <div className='deatils'>
                        <div className='col'>
                        <img src='images/clear.png'/>
                            <div className='humidity'>
                          <p> { Math.round(data.humidity)} %</p>
                          <p> Humidity</p>
                        </div>
                        <div className='col'>
                          <img  src='images/'/>
                        <p>2km/h</p>
                         <p> {data.wind}Wind Speed</p>
                         </div>
                        </div>
                        


                    </div>
                </div>

            </div>

        </div>
   
  )
}

export default Home