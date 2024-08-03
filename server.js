const express = require("express")
const app = express()
const weatherRoutes = require("./routes/weatherRoutes")
const { default: mongoose } = require("mongoose")
const cors = require("cors")
require('dotenv').config()

const corsOpts = {
    origin: '*',

    methods: [
        'GET',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};
app.use(cors(corsOpts))

const port = process.env.PORT || 8080
app.use("/weather", weatherRoutes)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('database connected successfully')
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})