const { dbAction } = require('./dbAction');
const { apiKey: secKey } = require('../creds/creds');
const fetch = require('node-fetch');

async function getData() {
    const baseUrl = 'https://api.darksky.net/forecast/';
    const apiKey = secKey;
    const latLong = '/36.158616,-86.790241';
    const finalUrl = baseUrl + apiKey + latLong;
    const response = await fetch(finalUrl);

    if (response['ok'] == false) {
        console.error('Failed to get data from the API.');
    }
    else {
        await insertData(response);
    }
}

async function insertData(response) {
    const myJson = await response.json();
    const weatherJson = myJson['currently'];
    const dbQuery = `SELECT log_weather($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
    const values = [
        weatherJson['temperature'],
        weatherJson['apparentTemperature'],
        weatherJson['humidity'],
        weatherJson['dewPoint'],
        weatherJson['pressure'],
        parseInt(weatherJson['visibility']),
        weatherJson['windSpeed'],
        weatherJson['windGust'],
        weatherJson['precipIntensity'],
        weatherJson['precipProbability'],
        weatherJson['uvIndex'],
        weatherJson['summary']
    ];
    dbAction(dbQuery, values);
}
exports.getData = getData;