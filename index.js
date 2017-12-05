const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
//-------------------------------------------------------------
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//-------------------------------------------------------------
app.get('/', (request, response)=>{
  response.send('stay calm...it is working...');
});

const clucksRouter = require('./routes/clucks');
app.use('/clucks', clucksRouter);



const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, ()=>{
  console.log(`Server is listening on http://${DOMAIN}: ${PORT}`);
});


// to chrome: http://localhost:3002/





//
