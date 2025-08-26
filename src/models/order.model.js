import mongoose,{Schema} from "mongoose";

const OrderSchema = new Schema({
    
},{Timestamp: true})

export const Order = mongoose.model("Order",OrderSchema)