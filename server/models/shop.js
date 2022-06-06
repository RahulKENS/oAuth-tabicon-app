import { Schema, model } from "mongoose";

const shopSchema = new Schema({
    shop:{
        type: String
    },
    access_token:{
        type:String
    }
});

const shopModel = model('shop', shopSchema);

export default shopModel;