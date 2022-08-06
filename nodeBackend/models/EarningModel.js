import mongoose from "mongoose";

const Schema = mongoose.Schema;

const earningSchema = new Schema({
    email: {type:String},
    value: {type:Number},
    concept: {type:String},
    payment: {type:String},
    date: {type:Date, default: Date.now},
    product: {type:String}
},
    {collection: 'earning'}
);

export default mongoose.model('EarningModel', earningSchema);