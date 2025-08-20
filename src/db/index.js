import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI} / ${DB_NAME}`)
        console.log(`MONGO DB CONNECTED!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("DB Error: ", error);
        process.exit(1)
    }
}

export default ConnectDB