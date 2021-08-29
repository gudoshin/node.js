import mongoose from "../../common/mongo";

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
		type: String,
		required: true,
		trim: true
	},
	surname: {
		type: String,
		required: true,
		trim: true
	},
	middleName: {
		type: String,
		default: null,
		trim: true
	}
} , {timestamps: true});

const User = mongoose.model('User', schema);

export default User;