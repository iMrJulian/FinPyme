import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    email : {type:String},
    code : {type:Number},
    stock : {type:Number},
    name : {type:String},
    priceUnit : {type:Number},
    costUnit : {type:Number},
    description : {type:String}    
},
    {collection:'product'}
);

export default mongoose.model('ProductModel', productSchema);