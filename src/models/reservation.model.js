import mongoose,{Schema} from "mongoose";

const ReservationSchema = new Schema({

},{Timestamp: true})

export const Reservation = mongoose.model("Reservation",ReservationSchema)