const mongoose = require('mongoose');

// news Schema
const usersSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
    password:{
		type: String,
		required: true
	}
	
	
});

const users = module.exports = mongoose.model('users', hnewsSchema);

// Get Books
module.exports.getusers = (callback, limit) => {
	hnews.find(callback).limit(limit);
}

// Get Book
module.exports.getusersById = (id, callback) => {
	users.findById(id, callback);
}

// Add Book
module.exports.addusers = (users, callback) => {
	users.create(book, callback);
}

// Update Book
module.exports.updateusers = (id, users, options, callback) => {
	var query = {_id: id};
	var update = {
		name: users.name,
		password:users.password,
		
	}
	users.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeusers = (id, callback) => {
	var query = {_id: id};
	users.remove(query, callback);
}