const express = require('express')

const ToolsController = require('./app/controllers/ToolsController')

const routes = express.Router()

routes.get('/tools', ToolsController.index)
routes.get('/tools/:id', ToolsController.show)
routes.post('/tools', ToolsController.store)
routes.delete('/tools/:id', ToolsController.destroy)

module.exports = routes
