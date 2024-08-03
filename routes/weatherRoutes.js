const express = require("express")
const axios = require("axios")
const WeatherModel = require("../models/Weather")

const app = express()

app.get("/:city", async (req, res) => {
    const cityName = req.params.city

    const weatherData = await WeatherModel.findOne({ cityName })
    if (weatherData) {
        res.send(weatherData)
        return
    }
    try {

        const weatherResponse = await
            axios
                .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}`)
        const newWeatherData = new WeatherModel({
            cityName,
            data: weatherResponse.data
        })

        const data = await newWeatherData.save()
        res.send(data)
    } catch (err) {
        res.send(err)
    }
})

module.exports = app