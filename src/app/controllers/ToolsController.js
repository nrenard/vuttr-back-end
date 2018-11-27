const Tool = require('../models/Tool')

class ToolsController {
  async index (req, res) {
    const { tag } = req.query

    if (tag) {
      const tools = await Tool.find({ tags: tag })

      return res.json(tools)
    }

    const tools = await Tool.find()
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
