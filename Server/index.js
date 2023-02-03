import express  from "express";
import { Connection } from "./Database/db.js";
import Routes from "./routes/route.js";
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Routes);


const username = "admin";
const password = "rrUhmFXK9wSIReju";
Connection(username, password);

app.listen(PORT, ()=> console.log("Server is running on port no. " + PORT))

