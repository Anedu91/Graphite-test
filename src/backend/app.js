import express from 'express';
import cors from 'cors';
const app = express();

//setings
app.set('port', 3000);

//Middleware 
app.use(cors());
app.use(express.urlencoded({extended:false}));



//Routes
app.use(require('./routes/index'));




module.exports = app;