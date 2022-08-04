import express from "express";
import cors from "cors";
import dbConnection from "./database/dbConnection.js";
import routes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/',routes);

app.get('/', (req, res) => {
    res.send("Hola mundo");
});

app.listen(8000, () =>{ 
    console.log("Servidor en funcionamiento");
});