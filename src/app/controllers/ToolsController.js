const Tool = require('../models/Tool')

class ToolsController {
  async index (req, res) {
    const { tag, title } = req.query

		const filters = {}

    if (tag) {
      filters.tags = tag
		}

		if (title) {
			filters.title =  new RegExp(title, 'i')
		}

    const tools = await Tool.find(filters)

    return res.json(tools)
  }

  async store (req, res) {
    try {
      const tool = await Tool.create(req.body)
      return res.json(tool)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

	async show (req, res) {
		const { id } = req.params

		const tool = await Tool.findOne({ _id: id })

		if (!tool) {
			return res.status(400).json({ error: 'Tool not found' })
		}

		return res.json(tool)
	}

  async destroy (req, res) {
    const { id } = req.params

    const tool = await Tool.findOneAndDelete({ _id: id })

    if (tool) {
      return res.json({})
    }

    return res.status(400).json({ error: 'Tool not found' })
  }
}

module.exports = new ToolsController()
