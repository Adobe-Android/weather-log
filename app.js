const { dbAction } = require("./dbAction");
const fetch = require('node-fetch');

async function getData() {
    const response = await fetch('https://api.darksky.net/forecast/75cc0cb9e8d9fb9cf991a7745d3742e7/36.158616,-86.790241');
    valueArr = [];

    if (response["ok"] == false) {
        console.error("Failed to get data from the API.");
    } else {
        const myJson = await response.json();
        const weatherJson = myJson["currently"];

        // gets values for every key in weather data
        populateValArr(weatherJson);
        const dbQuery = `INSERT INTO weather_history (
            temperature
            ,feels_like_temperature
            ,humidity
            ,dew_point
            ,pressure
            ,visibility
            ,wind_speed
            ,wind_gust
            ,precipitation
            ,precipitation_probability
            ,uv_index
            ,conditions
            )
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
        const values = [valueArr[8], valueArr[9], valueArr[11], valueArr[10], valueArr[12], parseInt(valueArr[18]), valueArr[13], valueArr[14], valueArr[6], valueArr[7], valueArr[17], valueArr[1]]
        dbAction(dbQuery, values)
    }

    function populateValArr(weatherJson) {
        for (key in weatherJson) {
            let value = weatherJson[key];
            valueArr.push(value);
        }
    }
}
getData();