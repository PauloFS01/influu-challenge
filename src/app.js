const express = require('express');
const path = require('path');

const routes = require('./routes');

class AppController {
  constructor() {
    this.express = express();

    this.setup();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  setup() {
    this.express.set('views', path.join(__dirname, 'views'));
    this.express.set('view engine', 'ejs');
  }

  routes() {
    this.express.use('/api/v1', routes);
  }
}

module.exports = new AppController().express;
