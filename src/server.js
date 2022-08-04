const express = require("express");
const React = require("react");
const ReactDomServer = require("react-dom/server");


const app = express();

app.get("/", (req, res) => {
    res.send("hola");
})

app.listen(3000, () => {
    console.log('server on port 3000');
})
 
