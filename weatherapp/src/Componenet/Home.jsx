import React, { useEffect, useState } from 'react'
import "./Style.css/Home.css"
import axios from "axios"

const Home = () => {
    const [name, setname] = useState("")
    const [error, setError] = useState("")
    const [data,setData] =  useState({
         celcius:10,name:"London",
         humidity:10,speed:2,image: "https://logodix.com/logo/448455.png"})
          
         useEffect(()=>{
            // const apiUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            // const city = 'Nepal';
            // const apiKey = "68ff20cdd3f397ada4d2f006b8577eb9"
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q"
            
          
            axios.get(apiUrl)
            .then(res =>console.log(res))
          
            .then(res =>{
                setData({...data,celcius:res.data.main.temp, naem: res.data.name, 
                    humidity: res.data.main.humidity,speed:res.data.wind.speed})
            })
            .catch(err => console.log(err))
         },[])
         const handleClick =() =>{
            if(name !==""){
                const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${name}&appid="
                axios.get(apiUrl)
                .then(res =>{
                    let imagePath = "";
                    if(res.data.weather[0] == "Clouds"){
                        imagePath ="https://tse2.mm.bing.net/th?id=OIP.c5HMlJC9L6HSgV-Cr0Xq-AHaEK&pid=Api&P=0&h=180"
                    }  else if(res.data.weather[0] == "Clear"){
                        imagePath ="https://img.hoodline.com/uploads/story/image/359031/featured_image_sunny_4.jpg.jpg"
                    }  else if(res.data.weather[0] == "Rain"){
                        imagePath ="https://lh5.ggpht.com/jg0pIXwV7UnkEQoKLULQ3TK7VbnMghEL5n0NfBSCOalUHZh8u5DM8unOYDwDZyR04pk=h900"
                    }  else if(res.data.weather[0] == "Drizzle"){
                        imagePath ="https://cdn1.iconfinder.com/data/icons/smashicons-weather-yellow/60/45_-Drizzle-_Yellow-512.png"
                    } else if(res.data.weather[0] == "Mist"){
                        imagePath ="https://c.pxhere.com/photos/08/2c/photo-57687.jpg!d"
                    } else{
                        imagePath ="https://tse2.mm.bing.net/th?id=OIP.c5HMlJC9L6HSgV-Cr0Xq-AHaEK&pid=Api&P=0&h=180"
                    }

                    console.log(res.data)
                    setData({...data,celcius:res.data.main.temp, naem: res.data.name, 
                        humidity: res.data.main.humidity,speed:res.wind.speed,image:imagePath})
                        setError("")
                })
      
            }
         }

  return (
        <div className='container'>
            <div className='weather'>
                <div className='search'>
                    <input type='text' placeholder='Enter City Name' onChange={event=>setname(event.target.value)}/>
                    <button><i class="fa-solid fa-magnifying-glass" onClick={handleClick}></i></button>
                </div>

                <div className='error'> <p>{error}</p></div>
                <div className='winfo'>
                    <img src= {data.image} alt='' className='icon'/>
                    <h1> { Math.round(data.celcius)}0°C</h1>
                    <h2>{data.name}</h2>
                 
                    <div className='deatils'>
                        <div className='col'>
                            <img style={{width:"60%",height:"100px"}} src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png'/>
                  
                            <div className='humidity'>
                          <p> { Math.round(data.humidity)} %</p>
                          <p> Humidity</p>
                        </div>
                        <div className='col'>
                        <img  style={{width:"60%",height:"100px"}} src='https://www.nicepng.com/png/detail/548-5480158_png-file-wind-weather-icon.png'/>

                        <p> {data.speed}5km/h</p>
                         <p> {data.wind}Wind</p>
                         </div>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
   
  )
}

export default Home