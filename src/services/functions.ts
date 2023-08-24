
export function getDirection(direction: string) {
    switch(direction) {
      case 'NNW':
        return 'СЗ'
      case 'NW':
        return 'СЗ'
      case 'WNW':
        return 'СЗ'
      case 'NNE':
        return 'СВ'
      case 'NE':
        return 'СВ'
      case 'ENE':
        return 'СВ'
      case 'ESE':
        return 'ЮВ'
      case 'SE':
        return 'ЮВ'
      case 'SSE':
        return 'ЮВ'
      case 'SSW':
        return 'ЮЗ'
      case 'SW':
        return 'ЮЗ'
      case 'WSW':
        return 'ЮЗ'
      case 'N':
        return 'С'
      case 'W':
        return 'З'
      case 'E':
        return 'В'
      case 'S':
        return 'Ю'
      default: 
        return 'Нет'
    }
  }

  export function getDate(date: number) {
    let localDate = new Date(date * 1000)

    let day = localDate.getUTCDate()
    let month = localDate.getMonth()

    let hours = localDate.getHours()
    let minutes = localDate.getMinutes()
  
    let stringMonth
    switch(month) {
      case 0: 
      stringMonth = 'Января'
      break;
      case 1: 
      stringMonth = 'Февраля'
      break;
      case 2: 
      stringMonth = 'Марта'
      break;
      case 3: 
      stringMonth = 'Апреля'
      break;
      case 4: 
      stringMonth = 'Мая'
      break;
      case 5: 
      stringMonth = 'Июня'
      break;
      case 6: 
      stringMonth = 'Июля'
      break;
      case 7: 
      stringMonth = 'Августа'
      break;
      case 8: 
      stringMonth = 'Сентября'
      break;
      case 9: 
      stringMonth = 'Октября'
      break;
      case 10: 
      stringMonth = 'Ноября'
      break;
      case 11: 
      stringMonth = 'Декабря'
      break;
    }

    return `${day} ${stringMonth} ${hours}:${minutes <= 9 ? `0${minutes}` : minutes}`
  }

  export function getWindColor(speed: number) {
    if(speed >= 10) {
      return 'Red'
    } else {
      return 'Black'
    }
  }

  export const getTempClass = (T: number) => {
    if (T >= 0) {
        if (T >= 27) {
            if (T >= 33) {
                if (T >= 42) {
                    if (T >= 54) {
                        return 'weateherWarmDeadly'
                    } else {
                        return 'weateherWarmVeryHard'
                    }
                } else {
                    return 'weateherWarmHard'
                }
            } else {
                return 'weateherWarmDanger'
            }
        } else {
            return 'weateherWarmNoraml'
        }
    } else {
        if (T <= -25) {
            if (T <= -36) {
                if (T <= -60) {
                    return 'weatherColdDeadly'
                } else {
                    return 'weatherColdVeryHard'
                }
            } else {
                return 'weateherColdHard'
            }
        } else {
            return 'weateherColdNoraml'
        }
    }
}