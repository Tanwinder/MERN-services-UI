// import express from "express";
const express = require("express")

const app = express();


app.use(express.static('./'));
app.use(express.static('dist'));

app.get('/*', function(req, res) {
	res.sendFile(`${ __dirname }/dist/index.html`);
})

// app.get("/", (req, res) => {
//     res.status(200);
//     res.send({hi: "there"})
// })


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running on port:- ", PORT)
})