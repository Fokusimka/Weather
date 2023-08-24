import React from 'react'

import './emptyComponent.css'
import { useStore } from '../services/store/store';
import { weatherData } from '../services/store/WeatherStore';

const APIKey = 'cca6912469064b8c96a105234231408'

const EmptyComponent = () => {
    const { weatherStore } = useStore();
    const [state, setState] = React.useState('')
    const [errorText, setErrorText] = React.useState('')
    const [isLate, setIsLate] = React.useState(false)

    if (!isLate) {
        setInterval(() => {
            setIsLate(true)
        }, 10000)
    }

    if (weatherStore.list.length <= 0) {
        let list = localStorage.getItem('weatherList')
        localStorage.removeItem('weatherList')
        if (list !== null) {
            let newList = JSON.parse(list)
            newList.map((weatherItem: weatherData) => {
                addToStore(weatherItem.location.name)
            })
        }
    }
    
    function error(status: number) {
        setErrorText('Неверно введено название города!')
        console.log(status)

        // setTimeout(() => {
        //     setErrorText('')
        //     setState('')
        // }, 5000)
        //Можно использовать для отчистки состояния ошибки с карточки через 5 сек.
    }

    function addToStore(city: string) {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no&lang=ru`)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => {
            weatherStore.list.push(data)
            localStorage.setItem('weatherList', JSON.stringify(weatherStore.list))
            setErrorText('')
            setState('')
        })
        .catch((er) => error(er.status));
    }

    return (
        <>
            <input type="checkbox" id="test" className='hide'/>
            <label htmlFor="test">
            <div className={`reversible weatherCard ${errorText !== '' && 'errorBorder'}`}>
                <div className="empty backContent">
                    <label>Добавить: </label>
                    <input className={`inputAdd ${errorText !== '' && 'errorBorder'}`} value={state} onChange={(e) => setState(e.target.value)} placeholder='Введите город' />
                    <span className='error'>{errorText}</span>
                    <button onClick={() => addToStore(state)} className={`button buttonAdd ${errorText !== '' && 'errorButton'}`}>Добавить</button>
                </div>
                <div className="empty frontContent">
                    <span>Добавить</span>
                    <span className='emptyAdd'>+</span>
                </div>
            </div>
            </label>
        </>
    )
    
}

export default EmptyComponent