const mongoose = require('mongoose')

const connectDB = () => {
	mongoose.connect('mongodb://root:root12@ds161169.mlab.com:61169/tools', {
			useNewUrlParser: true
	});
}

module.exports = connectDB
