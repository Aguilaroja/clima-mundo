const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(e => { console.log(e) });

// clima.getClima(19.430000, -99.139999)
//     .then(console.log)
//     .catch(e => { console.log(e) });

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion); //Así capturo los datos de la función
        const temp = await clima.getClima(coords.lat, coords.lng);
        return temp;
    } catch (error) {
        return `La dirección ${direccion} no es correcta`;
    }

}

getInfo(argv.direccion) //Con el argv recibe el dato desde consola
    .then(console.log)
    .catch(e => { console.log(e) });