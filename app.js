const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

/* lugar.getLugarLatLng(argv.direccion)
    .then((resp) => {
        clima.getClima(resp.lat, resp.lng)
            .then((resul) => {
                console.log(resul);
            })
            .catch(err => {
                console.log(err);
            })
    }).catch((err) => {
        console.log(err);
    }); */

const getInfo = async(direcc) => {
    try {
        const ciudad = await lugar.getLugarLatLng(direcc);
        const temperatura = await clima.getClima(ciudad.lat, ciudad.lng);
        return `El clima de ${ciudad.dire} es de ${temperatura.temperatura}`;
    } catch (error) {
        return error;
    }
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)