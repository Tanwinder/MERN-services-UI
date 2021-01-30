// import express from "express";
const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.status(200);
    console.log("hellooooooooo")
    let content = `<div style="color:blue;text-align:center;font-size: 40px">Hell00o</div>`
    res.send(`<html>
    <head>
    <meta http-equiv='cache-control' content='no-cache'> 
<meta http-equiv='expires' content='0'> 
<meta http-equiv='pragma' content='no-cache'> 
    <link rel="stylesheet" href="/material.css" />
    <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
        <div id="root">${content}</div>
    </body>
</html>`)
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("server is running on port:- ", PORT)
})