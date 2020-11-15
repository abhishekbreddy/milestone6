const mongoose = require('mongoose');

// news Schema
const hnewsSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
    headlines:{
		type: String,
		required: true
	}
	
	
});

const hnews = module.exports = mongoose.model('hnews', hnewsSchema);

// Get hnews
module.exports.gethnews = (callback, limit) => {
	hnews.find(callback).limit(limit);
}

// Get Bookdb
module.exports.gethnewsById = (id, callback) => {
	hnews.findById(id, callback);
}

// Add Book
module.exports.addhnews = (Hnews, callback) => {
	hnews.create(Hnews,callback);
}

// Update Book
module.exports.updatehnews = (id, a, options, callback) => {
	var query = {_id: id};
	var update = {
		name: a.name,
		headlines: a.headlines,
		
	}
	hnews.findOneAndUpdate(query, update, options, callback);
}


// Delete Book
module.exports.removehnews = (id, callback) => {
	var query = {_id: id};
	hnews.remove(query, callback);
}