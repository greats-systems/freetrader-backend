const express = require("express");
const bodyParser = require("body-parser");
const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

const PORT = process.env.PORT || 5000;
require("./app/routes/index.js")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });