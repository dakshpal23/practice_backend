import mongoose,{Schema} from "mongoose";

const InventorySchema = new Schema({

},{Timestamp: true})

export const Inventory = mongoose.model("Inventory",InventorySchema)