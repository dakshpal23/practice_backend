import { app } from "./app.js";
import ConnectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./.env",
})

ConnectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`SERVER IS RUNNING AT PORT: ${process.env.PORT}`)
})
})
.catch((err) => {
    console.log("MONGO Connection Error: ",err);
})