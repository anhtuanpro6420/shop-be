const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
	},
	roleID: {
		type: Schema.Types.ObjectId,
		ref: 'role'
	}
});

UserSchema.methods.getPublicProfile = function() {
	const user = this;
	const userObject = user.toObject();

	delete userObject.password;
	return userObject;
};

module.exports = User = mongoose.model('user', UserSchema);
