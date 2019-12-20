const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        // timeout: 1000,//Sino recibe respuesta, en este tiempo para el proceso
        headers: {
            'x-rapidapi-key': '9fc32d78d8msh4fe709433dbdf68p1a81d9jsnaa60add3df4d' //,
                // 'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data);
    //     })
    //     .catch(err => {
    //         console.log('Error: ', err);
    //     });

    return {
        direc,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}