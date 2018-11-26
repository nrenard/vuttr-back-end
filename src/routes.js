const express = require('express')

const ToolsController = require('./app/controllers/ToolsController')

const routes = express.Router()


routes.get('/tools', ToolsController.index)
routes.post('/tools', ToolsController.store)

module.exports = routes;
