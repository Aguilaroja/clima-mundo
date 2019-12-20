const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dafa066c6d02fd8b4fda79c3bcdf0eac&units=metric`)

    return `La temperatura de ${resp.data.name} es: ${resp.data.main.temp} °C`;
}

module.exports = {
    getClima
}