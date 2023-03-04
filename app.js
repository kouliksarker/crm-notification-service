// const cron = require("node-cron")
require("./crons/cron")
// cron.schedule('*/5 * * * * *', ()=>console.log("Hi how are you?"))
const dbConfig = require('./configs/db.config')
const mongoose = require('mongoose')
const express = require('express')

const app = express() //creates a new instance of the Express application
app.use(express.json()) //middleware to parse incoming JSON data. It adds a body property to the request object, which contains the parsed JSON data.

mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("Can't connect to db"))
db.once("open", () => {
    console.log("Connected to MongoDB")
})

require("./routes/ticketNotification.routes")(app) //This allows the module to define routes and middleware 

app.listen(3030, () => {
    console.log("Application started on the port 3030")
})