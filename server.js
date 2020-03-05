const express = require('express');
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

// app
const app = express();

let swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Maalgari.',
      description: 'Node.js REST - API.',
      contact: {
        name: 'Hadi Tariq.',
        email: 'hadi.tariq02@gmail.com'
      },
      servers: ['http://localhost:5000']
    }
  },
  apis: ['./routes/*.js', './routes/*/*.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));

// Body Parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// port & server
let port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Connected to ${port}`);
});

// include modules
const root = require('./routes');
const customer = require('./routes/customer');
const driver = require('./routes/driver');

// use modules
app.use('/', root);
app.use('/customer', customer);
app.use('/driver', driver);

