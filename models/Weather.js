const { default: mongoose, Schema } = require("mongoose");

const weatherSchema = new Schema({
    cityName: String,
    data: Object
})
const WeatherModel = mongoose.model('Weather', weatherSchema)

module.exports = WeatherModel