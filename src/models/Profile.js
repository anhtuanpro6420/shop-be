const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	},
	phone: {
		type: String
	},
	address: {
		type: String
	},
	dateOfBirth: {
		type: Date
	},
	userID: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	}
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
