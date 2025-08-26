import mongoose,{Schema} from "mongoose";

const TableSchema = new Schema({

},{Timestamp: true})

export const Table = mongoose.model("Table",TableSchema)