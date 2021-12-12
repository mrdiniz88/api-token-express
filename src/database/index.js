require("dotenv").config()
const mongoose = require("mongoose");


// Connecting to the mongo database
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-token-express.melbp.mongodb.net/api-token-express?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectamos ao banco de dados')
    })
    .catch((err) => console.log(err))

mongoose.Promise = global.Promise;

module.exports = mongoose;