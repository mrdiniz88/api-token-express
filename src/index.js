const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Using body-parser to turn our API into json.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


require('./app/controllers/index')(app);

// Opening a door.
app.listen(process.env.PORT || 3000);
