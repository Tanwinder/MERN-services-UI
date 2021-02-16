// import express from "express";
const express = require("express")
const proxy = require('./proxy');

const app = express();
proxy(app);

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('/*', function(req, res) {
	res.sendFile(`${ __dirname }/dist/index.html`);
})


const PORT = process.env.PORT || 3000;

console.log("process.env.NODE_ENV----", process.env.NODE_ENV)
app.listen(PORT, () => {
    console.log("server is running on port:- ", PORT)
})