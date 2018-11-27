require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

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
		mongoose.connect(
			process.env.DB_URL,
      {
        useCreateIndex: true,
        useNewUrlParser: true
      }
		)
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
