const express = require('express')
const app = express()
const port = 8000
const path = require('path');
// const livereload = require('livereload');
// const connectLivereload = require("connect-livereload");
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
  src: path.join(__dirname, 'scss'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  indentedSyntax: true
}));

const publicDirectory = path.join(__dirname, 'public');


// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(publicDirectory);
// // liveReloadServer.watch(sassDirectory);
// liveReloadServer.server.once("connection", () => {
//   setTimeout(()=> {
//     liveReloadServer.refresh("/public");
//     // liveReloadServer.refresh("/sass");
//   },100)
// })
//
// app.use(connectLivereload())


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




app.use(express.static('public'))
