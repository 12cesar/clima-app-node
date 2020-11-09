const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=304e40756d6cb85a3eee5e008ecf154f&units=metric`);
    temperatura = resp.data.main.temp;
    return {
        temperatura
    }
}

module.exports = {
    getClima
}