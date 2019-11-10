import express from 'express';
import {db}  from './db/db';
import bodyParser from 'body-parser';

const app =express();
//use bodyParser to extract json from the request into the req object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded:false}));

app.get('/api/todos',(req,res) =>{
   res.status(200).send({
       success:'true',
       message:'todos retrieved successfully',
       todos: db
   }) 
});


const PORT = 5000;
app.listen(PORT,() =>{console.log(`srver running on port ${PORT}`)
});