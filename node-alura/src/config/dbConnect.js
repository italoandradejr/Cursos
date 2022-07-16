import mongoose from "mongoose";

mongoose.connect("mongodb+srv://italojr:1234@cluster0.4ytsq.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;


