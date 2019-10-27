const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	images: {
		type: Array,
		required: true,
		default: []
	},
	videos: {
		type: Array,
		default: []
	},
	priceBefore: {
		type: Number,
		default: 0
	},
	price: {
		type: Number,
		required: true,
		default: 0
	},
	size: {
		type: Array,
		default: []
	},
	color: {
		type: Array,
		default: []
	},
	amount: {
		type: Number,
		default: 0
	},
	categoryID: {
		type: Schema.Types.ObjectId,
		ref: 'category'
	}
});

module.exports = Product = mongoose.model('product', ProductSchema);
