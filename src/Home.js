import React from 'react'

import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <div className='weather'>
                <div className='search'>
                    <input type='text' placeholder='Enter City name' />
                    <button><img src='/images/search.png' /></button>
                </div>
                <div className='weather-info'>
                    <img className='icon' src='/images/clouds.png' />
                    <h1>22°C</h1>
                    <h2>London</h2>
                    <div className='details'>
                        <div className='col'>
                            <img src='/images/humidity.png' />
                            <div className='humidity'>
                                <p>20%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className='col'>
                            <img src='/images/wind.png' />
                            <div className='wind'>
                                <p>2 km/h</p>
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