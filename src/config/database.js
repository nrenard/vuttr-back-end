const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(
    'mongodb://localhost:27017/tools',
    {
      useNewUrlParser: true
    }
  )
}

module.exports = connectDB
