const mongoose = require('mongoose')

const ToolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String,
      lowercase: true,
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Tool', ToolSchema)
