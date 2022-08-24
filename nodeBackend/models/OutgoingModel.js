import mongoose from "mongoose";

const Schema = mongoose.Schema;

const outgoingSchema = new Schema({
    email : {type:String},
    value : {type:Number},
    concept : {type:String},
    payment : {type:String},
    date: {type:Date, default:Date.now},
    category : {type:String}    
},
    {collection:'outgoing'}
);

export default mongoose.model('OutgoingModel', outgoingSchema);