CREATE TABLE weather_history (
    date_time TIMESTAMPTZ PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
    temperature FLOAT(2),
    feels_like_temperature FLOAT(2),
    humidity FLOAT(2),
    dew_point FLOAT(2),
    pressure FLOAT(2),
    visibility INTEGER,
    wind_speed FLOAT(2),
    wind_gust FLOAT(2),
    precipitation FLOAT(4),
    precipitation_probability FLOAT(2),
    uv_index INTEGER,
    conditions VARCHAR(20)
)