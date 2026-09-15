import dotenv from "dotenv";

import connectDB from "./db/configDB.js";

dotenv.config({ path: "./.env" });

connectDB();
