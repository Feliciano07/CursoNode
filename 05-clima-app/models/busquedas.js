const axios = require('axios').default;


class Busquedas{

    historial = [];

    constructor(){
        //TODO: leer db si existe
    }


    get paramsMapBox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    paramsOpen(lat,lon){
        return{
            'lat':lat,
            'lon':lon,
            'appid': process.env.OPEN_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    async Ciudad(lugar = ''){
        try {
            const instace = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params:this.paramsMapBox
            })

            const respuesta = await instace.get();

            return respuesta.data.features.map( lugar => ({
                id:lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }))

        } catch (error) {
            return [];
        }
    }

    async Clima(latitud = 0, longitud = 0){

        const instance = axios.create({
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            params:this.paramsOpen(latitud, longitud)
        })

        const respuesta = await instance.get();

        return {
            descripcion: respuesta.data.weather[0].description,
            temperatura: respuesta.data.main.temp,
            minima: respuesta.data.main.temp_min,
            maxima: respuesta.data.main.temp_max
        }
    }

}


module.exports = Busquedas;
