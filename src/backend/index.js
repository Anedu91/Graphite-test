import express from 'express';
import cors from 'cors';

//Starting the instance
const app = express();

// Using middleware
// app.use(express.json());
// app.use(express.urlencoded());

//Cors for cross origin allowance
app.use(cors())




const port = 3000;

const server = app.listen(port, listening)

function listening(){
  console.log('Server running')
  console.log(`Running on localhost ${port}`)
}