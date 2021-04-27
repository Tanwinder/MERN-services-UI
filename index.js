const express = require("express")
const mongoose = require('mongoose');
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser')
const passport = require("passport");
const keys = require("./config/key");
// const { createProxyMiddleware } = require('http-proxy-middleware');
// require('dotenv').config()
require("./models/users")
require("./server/passport");

const app = express();
// const serviceUrl = process.env.NODE_ENV === 'production' ? 'https://mern-services.herokuapp.com/' : 'http://localhost:5000';
app.use(express.static('./'));
app.use(express.static('dist'));
// app.use(
//     '/api/*',
//     createProxyMiddleware({
//       target: serviceUrl,
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     '/auth/google',
//     createProxyMiddleware({
//       target:  serviceUrl,
//       changeOrigin: true,
//     })
//   );
// const proxy = require(`${__dirname}/proxy`);
// proxy(app);

// var corsOptions = {
//   credentials: true, 
//   // origin: appUrl
//   // 'Access-Control-Allow-Origin': true
// };
// app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(
  cookieSession({
      name: "userCookie",
      maxAge: 30 * 60 * 1000,
      // domain: appUrl,
      // maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.COOKIE_KEY]
  })
)

app.use(passport.initialize());
app.use(passport.session());

require("./server/authRoutes")(app);

mongoose.connect(keys.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
})
.then( acc => {
    console.log("mongoDB successfully connected----")
})
.catch( error => {
    console.log("MongoDB connectivity error----", error)
})

app.get('/*', function(req, res) {
	res.sendFile(`${ __dirname }/dist/index.html`);
})


const PORT = process.env.PORT || 3000;

console.log("process.env.NODE_ENV----", process.env.NODE_ENV, `${__dirname}/proxy`);
console.log("process.env.HELLO-----", process.env.HELLO);
app.listen(PORT, () => {
    console.log("server is running on port:- ", PORT)
})