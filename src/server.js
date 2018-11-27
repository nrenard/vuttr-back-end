const express = require('express')
const cors = require('cors')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  database () {
    // connect to DB
    require('./config/database')()
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
