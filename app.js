const { dbAction } = require('./dbAction');
const fetch = require('node-fetch');
const { apiKey: secKey } = require('./creds');

(async function getData() {
    const baseUrl = 'https://api.darksky.net/forecast/';
    const apiKey = secKey;
    const latLong = '/36.158616,-86.790241';
    const finalUrl = baseUrl + apiKey + latLong;
    const response = await fetch(finalUrl);
    valueArr = [];

    if (response["ok"] == false) {
        console.error("Failed to get data from the API.");
    } else {
        const myJson = await response.json();
        const weatherJson = myJson["currently"];

        // gets values for every key in weather data
        populateValArr(weatherJson);
        const dbQuery = 
        `SELECT log_weather($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`
        const values = [valueArr[8], valueArr[9], valueArr[11], valueArr[10], valueArr[12], parseInt(valueArr[18]), valueArr[13], valueArr[14], valueArr[6], valueArr[7], valueArr[17], valueArr[1]]
        dbAction(dbQuery, values)
    }

    function populateValArr(weatherJson) {
        for (key in weatherJson) {
            let value = weatherJson[key];
            valueArr.push(value);
        }
    }
})();