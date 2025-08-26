import mongoose,{Schema} from "mongoose";

const MenuSchema = new Schema({
    itemName:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    isAvailable:{
        type: Boolean,
        true: true
    }
},{Timestamp: true})

export const Menu = mongoose.model("Menu",MenuSchema)