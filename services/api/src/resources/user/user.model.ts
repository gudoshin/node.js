const mongoose = require( "../../common/mongo");

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
		type: String,
		required: true,
		trim: true
	},
	surname: {
		type: String,
		default: null,
		trim: true
	},
	middleName: {
		type: String,
		default: null,
		trim: true
	},
	login: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	}
} , {timestamps: true});

const User = mongoose.model('User', schema);

export default User;