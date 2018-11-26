const Tool = require('../models/Tool')

class ToolsController {
	async index (req, res) {
		const tools = await Tool.find({})
		return res.json(tools)
	}

	async store (req, res) {
		const tool = await Tool.create(req.body)

		return res.json(tool);
	}
}

module.exports = new ToolsController()
