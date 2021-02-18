// import express from "express";
const express = require("express")
const { createProxyMiddleware } = require('http-proxy-middleware');
// require('dotenv').config()

const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));
// app.use(
//     '/api/*',
//     createProxyMiddleware({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
// const proxy = require(`${__dirname}/proxy`);
// proxy(app);

app.get('/*', function(req, res) {
	res.sendFile(`${ __dirname }/dist/index.html`);
})


const PORT = process.env.PORT || 3000;

console.log("process.env.NODE_ENV----", process.env.NODE_ENV, `${__dirname}/proxy`)
app.listen(PORT, () => {
    console.log("server is running on port:- ", PORT)
})