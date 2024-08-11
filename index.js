import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {dataBaseConnection} from "./db/connection.js";


const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb",  extended:true}));
dataBaseConnection();
app.listen(PORT,()=>{
    console.log(`SERVER IS CONNECTED TO THE PORT ${PORT}`);
});