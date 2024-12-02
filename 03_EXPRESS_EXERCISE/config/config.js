import mongoose from "mongoose";
import keys from "./keys.js";

const MONGO_DB_NAME = "gestion_entradas";

const connectionConfig = {dbName: MONGO_DB_NAME};
mongoose.set('strictQuery', true);

try{
  await mongoose.connect(keys.MONGO_URI, connectionConfig);
  console.log("Connected to MongoDB")
} catch (error){
  console.error('Error connecting to MongoDB: ', error);
}
