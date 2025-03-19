const express = require('express');
const bodyParser = require('body-parser')
const yaml = require('js-yaml')
const fs = require('fs')
const swaggerUI = require('swagger-ui-express')

const swaggerDoc = yaml.load(fs.readFileSync('swagger.yaml', 'utf8'))

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

const PORT = process.env.PORT || 5000;

require('./app/routes/certificate/certificate.js')(app)
require('./app/routes/certificate/certificateissuer.js')(app)

require('./app/routes/commodity/commodity.js')(app)

require('./app/routes/contract/contract.js')(app)
require('./app/routes/contract/contractbid.js')(app)

require('./app/routes/crop/crop.js')(app)
require('./app/routes/crop/cropproduction.js')(app)

require('./app/routes/farmer/bankaccount.js')(app)
require('./app/routes/farmer/farm.js')(app)
require('./app/routes/farmer/farmer.js')(app)
require('./app/routes/farmer/livestock.js')(app)
require('./app/routes/farmer/nextofkin.js')(app)
require('./app/routes/farmer/cooperative.js')(app)
require('./app/routes/farmer/dashboard.js')(app)

require('./app/routes/ward/ward.js')(app)

require('./app/routes/root.js')(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });