CREATE FUNCTION log_weather(p1 FLOAT, p2 FLOAT, p3 FLOAT, p4 FLOAT, p5 FLOAT, p6 INTEGER, p7 FLOAT, p8 FLOAT, p9 FLOAT, p10 FLOAT, p11 INTEGER, p12 VARCHAR) RETURNS void AS $$
BEGIN
INSERT INTO weather_log.weather_history (
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
VALUES(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
END; $$
LANGUAGE PLPGSQL;