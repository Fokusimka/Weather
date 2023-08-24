import React from 'react'
import { getDirection, getTempClass, getWindColor } from '../services/functions';

import compass from '../assets/compass.png';
import trash from '../assets/trash.png';
import direction from '../assets/direction.png';
import { useStore } from '../services/store/store';
import { weatherData } from '../services/store/WeatherStore';
type idProp = {
    id: number
}

const WeatherCard = ({location, current, id}: weatherData & idProp) => {
    const { weatherStore } = useStore();
    const deleteCard = () => {
        let newArray = weatherStore.list.filter((item, index) => index !== id && item)
        weatherStore.list = newArray;
        localStorage.setItem('weatherList', JSON.stringify(newArray))
    }

    return (
        <section className='weatherCard'>
            <div className='weatherCardHeader'>
                <span>{location.name}, {location.country}</span>
                <img 
                    src={trash}
                    alt="*"
                    className='weatherCardHeaderTrash'
                    width={20}
                    height={20}
                    onClick={() => deleteCard()}
                />
            </div>
            <div className='weatherCardImageTemp'>
                <img src={current.condition.icon} alt='Weather icon' />
                <div>
                    <span className={`${getTempClass(current.temp_c)}`}>
                        {current.temp_c}
                    </span>
                    °C
                </div>
            </div>
            <p className='weatherCardDescription'>
                Ощущается как {' '}
                <span className={`${getTempClass(current.temp_c)}`}>{current.temp_c}</span>
                °C. {current.condition.text}
            </p>
            <div className='weatherCardFooter'>
                <div className='weatherCardImageWithText'>
                <img src={direction} alt='*' width={15} height={15}  />
                <span>{current.wind_mph}м/с {getDirection(current.wind_dir)}</span>
                </div>
                <span> 
                    Порывы: {` `}
                    <span className={`weatherCardWindColor${getWindColor(current.gust_mph)}`}>
                        {current.gust_mph}
                    </span>
                    м/с
                </span>
                <div className='weatherCardImageWithText'>
                <img src={compass} alt='*' width={15} height={15}  />
                <span>{current.pressure_mb}мм рт.ст.</span>
                </div>
                <span>Влажность: {current.humidity}%</span>
                <span>Видимость: {current.vis_km}км</span>
            </div>
          </section>
    )
}

export default WeatherCard