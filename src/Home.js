import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './Home.css'

const Home = () => {
    const [data, setData] = useState({
        celsius: '',
        name: '',
        humidity: '',
        wind:'',
        image: ''
    });

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (name !== '') {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=14a93e1be88542f17b854bfd0e8e07b3&units=metric`;
            axios.get(apiUrl)
                .then(res => {
                    let imagePath = '';
                    if (res.data.weather[0].main === 'Clouds') {
                        imagePath = '/images/clouds.png';
                    } else if (res.data.weather[0].main === 'Clear') {
                        imagePath = '/images/clear.png';
                    } else if (res.data.weather[0].main === 'Rain') {
                        imagePath = '/images/rain.png';
                    }
                    else if (res.data.weather[0].main === 'Drizzle') {
                        imagePath = '/images/drizzle.png';
                    }
                    else if (res.data.weather[0].main === 'Mist') {
                        imagePath = '/images/mist.png';
                    }
                    else if (res.data.weather[0].main === 'Snow') {
                        imagePath = '/images/snow.png';
                    } else {
                        imagePath = '/images/clouds.png';
                    }
                    console.log(res.data);
                    setData({
                        ...data,
                        celsius: res.data.main.temp,
                        name: res.data.name,
                        humidity: res.data.main.humidity,
                        wind: res.data.wind.speed,
                        image: imagePath
                    })
                    setError('');
                })
                .catch(err => {
                    if (err.response.status == 404) {
                        setError('Invalid City Name')
                    }
                    console.log(err)
                })

        }

    }

    return (
        <div className='container'>
            <div className='weather'>
                <div className='search'>
                    <input type='text'
                        placeholder='Enter City name'
                        onChange={e => { setName(e.target.value) }} />
                    <button><img src='/images/search.png' onClick={handleSearch} /></button>
                </div>
                <div className='error'>
                    <p>{error}</p>
                </div>
                <div className='weather-info'>
                    <img className='icon' src={data.image} />
                    <h1>{Math.round(data.celsius)}°C</h1>
                    <h2>{data.name}</h2>
                    <div className='details'>
                        <div className='col'>
                            <img src='/images/humidity.png' />
                            <div className='humidity'>
                                <p>{Math.round(data.humidity)}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className='col'>
                            <img src='/images/wind.png' />
                            <div className='wind'>
                                <p>{Math.round(data.wind)} km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home