import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type:String},
    celphone: {type:Number},
    email: {type:String},
    password: {type:String}
},
    {collection: 'user'}
);

export default mongoose.model('UserModel', userSchema);