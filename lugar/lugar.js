const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${encodeUrl}&language=en`,
        headers: { 'x-rapidapi-key': 'd42871564dmsh5be183f1c0f0e8bp16f259jsn4664b64f6d77' }
    });

    const resp = await instance.get();
    if (resp.data.results.length === 0) {
        throw new Error(`No hay resultados para  ${dir}`);
    }

    const data = resp.data.results[0];
    const dire = data.address_components[0].long_name + ", " + data.address_components[2].long_name;
    const lat = data.geometry.location.lat;
    const lng = data.geometry.location.lng;
    return {
        dire,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng,

}