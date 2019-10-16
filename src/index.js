import '@babel/polyfill';
import "dotenv/config";
import express from 'express';
import consolidate from 'consolidate'
import path from 'path'

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('html', consolidate.swig)
/* app.use('/',function(req, res) {
  res.sendfile(path.join(__dirname, 'views/home/index.html'));
}) */


/* app.set('views', path.join(__dirname, 'views/home'));
app.set('view engine', 'html'); */
app.use(express.static(__dirname + '/views/home'));
app.listen(PORT, () => {
    console.log(`Face API is listening in port ${PORT}`);
  });