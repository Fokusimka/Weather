import React from 'react';
import './App.css';
import WeatherCard from './components/weatherCard';
import EmptyComponent from './components/emptyComponent';
import { observer } from 'mobx-react-lite'
import { useStore } from './services/store/store';

const App = observer(() => {

  const { weatherStore } = useStore();

  return (
    <div className='weatherContainer'>
      <header className='weatherHeader'>
        <span>Прогноз погоды в городах</span>
      </header>
      <main className='weatherBody'>
        {weatherStore.list.map((itemData, index) =>
          <WeatherCard location={itemData.location} current={itemData.current} id={index} />
        )}
        <EmptyComponent />
      </main>
      <footer className='weatherFooter'>
        Проект реализован при поддержке API с открытым кодом <a href='https://www.weatherapi.com/'>Weather API</a>
      </footer>
    </div>
  );
})

export default App;
