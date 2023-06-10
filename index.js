import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Route from "./routes/routes.js"
import dbConnection from "./dataBase/dbConnection.js";




const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended: true}));

app.use("/", Route);



const DB_USER = process.env.DBUSER;
const DB_PWD = process.env.DBPWD;

const PORT = process.env.PORT || 4000;

app.listen(PORT, async ()=>{
    console.log(`Sever is running at: http://localhost:${PORT}`);
    await dbConnection(process.env.DBUSER, process.env.DBPWD);
})