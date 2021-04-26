const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require("connect-livereload");



const publicDirectory = path.join(__dirname, 'public');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectory);
liveReloadServer.server.once("connection", () => {
  setTimeout(()=> {
    liveReloadServer.refresh("/public")
  },100)
})

app.use(connectLivereload())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
